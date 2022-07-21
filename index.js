import express from 'express';
import path from "path";
import {fileURLToPath} from 'url';
import jwt from "jsonwebtoken";
import {default as dotenv} from 'dotenv';
dotenv.config();
// require('dotenv').config();
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// const mongo = require('@metamodules/mongo')().base;

import invoiceRoutes from "./routes/Invoice.js";

import reportRoutes from './routes/Report.js';
import webHookRoutes from './routes/StripeWebhook.js';
import { responseEnhancer } from 'express-response-formatter';

process.env.SECRET_KEY = "DEV";
import { authRouter } from 'node-mongoose-auth';
import mongoose from 'mongoose';
import AuthRoutes from './routes/Auth.js';
import { initiateRestore, Stripe } from './stripe.js';
import { WebSocketServer } from 'ws';
import { addActiveUserSession } from './websocket_utils.js';
// const UserSchema = require("node-mongoose-auth/models/UserSchema").add({permissions : String});

const app = express()
const port = process.env.PORT || 3000;
app.use(cors())

const MONGO_URI = "mongodb+srv://admin:admin@cluster0.loydr.mongodb.net/mongo?retryWrites=true&w=majority"


mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(r => {

  initiateRestore();
  
  app.use('/auth', authRouter);

});

app.use('/webhook', webHookRoutes);

app.use(responseEnhancer());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/invoices', invoiceRoutes);
app.use('/reports', reportRoutes);

app.use('/user', AuthRoutes);



// PRINT ROUTES
// function print (path, layer) {
//     if (layer.route) {
//       layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))))
//     } else if (layer.name === 'router' && layer.handle.stack) {
//       layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))))
//     } else if (layer.method) {
//       console.log('%s /%s',
//         layer.method.toUpperCase(),
//         path.concat(split(layer.regexp)).filter(Boolean).join('/'))
//     }
//   }

//   function split (thing) {
//     if (typeof thing === 'string') {
//       return thing.split('/')
//     } else if (thing.fast_slash) {
//       return ''
//     } else {
//       var match = thing.toString()
//         .replace('\\/?', '')
//         .replace('(?=\\/|$)', '$')
//         .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//)
//       return match
//         ? match[1].replace(/\\(.)/g, '$1').split('/')
//         : '<complex:' + thing.toString() + '>'
//     }
//   }

//   app._router.stack.forEach(print.bind(null, []))
// PRINT ROUTES

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const server = app.listen(port, () => console.log(`Backend API listening on port ${port}!`));

const wss = new WebSocketServer({noServer : true});

global.sessions_mapping = {};
wss.on('connection', async function connection(ws, request, user_id, report_id) {

  

  await addActiveUserSession( report_id, ws);
  const reportRun = await Stripe.reporting.reportRuns.retrieve( report_id );

  if(reportRun.status !== "pending"){
    ws.send(JSON.stringify(reportRun));
    ws.close();
  }

  ws.on('message', function message(data) {
    ws.send(data);

  });
  
  ws.send('Connection successful.');
});

server.on('upgrade', async function upgrade(request, socket, head) {      //handling upgrade(http to websocekt) event


  //emit connection when request accepted
  wss.handleUpgrade(request, socket, head, async function done(ws) {

    try {
      const search= request.url.substring(1);
      const params = new URLSearchParams(search);

      const auth_token = params.get("auth_token");
      const report_id = params.get("report_id");

      // console.log(auth_token, report_id);

      const user_data = await jwt.verify(auth_token, process.env.SECRET_KEY);
      
      wss.emit('connection', ws, request, user_data.id, report_id);
    } catch (error) {
      console.log(error.message || error);
      socket.destroy();
    }
  });
});



