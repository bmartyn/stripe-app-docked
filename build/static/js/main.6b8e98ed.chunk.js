(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{358:function(e,t,a){},447:function(e,t,a){e.exports=a(642)},452:function(e,t,a){},548:function(e,t,a){},641:function(e,t,a){},642:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(70),c=a.n(l);a(452),a(453),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(68),i=a(34),u=a(30),s=a(669),m=a(665),d=a(661),E=a(663),v=a(670),p=a(656),f=a(269),h=a(198),b=a.n(h),g=a(416),y=a.n(g),_=a(64),O=a(106),k=a(273),j=a(657),x=a(649),w=a(662),A=a(284),C=a(430),S=a(212),I=a.n(S),N=a(399),Y=a.n(N),M="".concat(window.location.protocol,"//").concat(window.location.hostname);"localhost"==window.location.hostname&&(M+=":3000");var D=M,T=function(e,t,a,n,r,l){Y.a.post(D+e,t,n?{headers:{Authorization:n}}:{}).then(a).catch(function(e){P(e,l),r&&r(!1)})},P=function(e,t){var a={};if(console.log("CAUGHT API CALL ERROR : ",e),403===e.response.status)return a.message="Your Session has timed out.",a.description="Please sign in again to continue.",C.a.error(a),void t("/");if(a={message:"There was an error."},!e.response)return e.data,void C.a.error({message:"There was an error.",description:e.message?e.message:e});var n=e.response;n.data&&(n.data.raw&&n.data.raw.message?a.description=n.data.raw.message:n.data.error&&n.data.error.message?a.description=n.data.error.message:"string"===typeof n.data.error?a.description=n.data.error:Array.isArray(n.data.error)?n.data.error.forEach(function(e){a.description+=e+"."}):n.data.message?a.description=n.data.message:n.message&&(a.description=n.message)),a.description||(a.description=e.response.statusText),C.a.error(a)},R=function(e){var t=new Date(1970,0,1);return t.setSeconds(e),t},F=function(e){var t=!1;switch(e){case"paid":t="green";break;case"invoiced_in_error":t="volcano";break;case"waiver":case"voucher":t="geekblue";break;case"refund":t="orange";break;case"uncollectible":t="magenta";break;case"open":t="cyan"}return t},L=function(e){var t={"balance.summary.1":"Balance - Summary","balance_change_from_activity.summary.1":"Balance change from activity - Summary","balance_change_from_activity.itemized.3":"Balance change from activity - Itemized","payouts.summary.1":"Payouts - Summary","payouts.itemized.3":"Payouts - Itemized","payout_reconciliation.summary.1":"Payout reconciliation - Summary","payout_reconciliation.itemized.5":"Payout reconciliation - Itemized","ending_balance_reconciliation.summary.1":"Ending balance reconciliation - Summary"};return t.hasOwnProperty(e)?t[e]:e=(e=e.replaceAll("."," ")).replaceAll("_"," ")},G=a(431),z=function(e){var t=e.status,a=e.faint;return r.a.createElement(G.a,{style:{opacity:a?"0.4":"1"},color:F(t)},t?t.toUpperCase():"None")},B=a(202),U=function(e,t,a,n,r){T("/invoices/update/".concat(e),{invoice_id:t},function(e){200==e.status?n():P(e)},a,null,r)},W=function(e,t,a,n,r){T("/invoices/update/label/".concat(e),{invoice_id:t},function(e){200==e.status?n():P(e)},a,null,r)},$=function(e,t,a,n){return r.a.createElement(f.a,{items:[{key:1,label:r.a.createElement(o.c,{to:"/sheet/invoice/view/"+e},r.a.createElement(O.a,{type:"dashed",icon:r.a.createElement(d.a,null),block:!0},"View Invoice"))},{key:2,label:"Mark Invoice",children:[{key:"2.1",label:r.a.createElement(O.a,{block:!0,type:"dashed",onClick:function(){return W("paid",e,t,a,n)}},"Paid")},{key:"2.2",label:r.a.createElement(O.a,{block:!0,type:"dashed",onClick:function(){return W("invoiced_in_error",e,t,a,n)}},"Invoiced in error")},{key:"2.3",label:r.a.createElement(O.a,{block:!0,type:"dashed",onClick:function(){return W("waiver",e,t,a,n)}},"Waiver")},{key:"2.4",label:r.a.createElement(O.a,{block:!0,type:"dashed",onClick:function(){return W("voucher",e,t,a,n)}},"Voucher")},{key:"2.5",label:r.a.createElement(O.a,{block:!0,type:"dashed",onClick:function(){return W("refund",e,t,a,n)}},"Refund")},{key:"2.6",label:r.a.createElement(O.a,{block:!0,type:"dashed",onClick:function(){return W("uncollectible",e,t,a,n)}},"Uncollectible")}]},{key:3,label:"Change Status",children:[{key:"3.1",label:r.a.createElement(O.a,{block:!0,onClick:function(){return U("paid",e,t,a,n)}},"Paid")},{key:"3.2",label:r.a.createElement(O.a,{block:!0,onClick:function(){return U("invoiced_in_error",e,t,a,n)}},"Invoiced in error")},{key:"3.3",label:r.a.createElement(O.a,{block:!0,onClick:function(){return U("waiver",e,t,a,n)}},"Waiver")},{key:"3.4",label:r.a.createElement(O.a,{block:!0,onClick:function(){return U("voucher",e,t,a,n)}},"Voucher")},{key:"3.5",label:r.a.createElement(O.a,{block:!0,onClick:function(){return U("refund",e,t,a,n)}},"Refund")},{key:"3.6",label:r.a.createElement(O.a,{block:!0,onClick:function(){return U("uncollectible",e,t,a,n)}},"Uncollectible")}]},{key:4,label:r.a.createElement(O.a,{type:"primary",danger:!0,icon:r.a.createElement(w.a,null),block:!0,onClick:function(){return U("uncollectible",e,t,a,n)}},"Refund")}],onClick:function(e){return console.log(e)}})},H=function(e,t,a,n){console.log("params",e,t,a,n)},V=function(){var e=Object(_.c)(),t=Object(i.g)(),a=Object(n.useState)([]),l=Object(u.a)(a,2),c=l[0],o=l[1],s=Object(n.useState)(!1),m=Object(u.a)(s,2),d=m[0],E=m[1],v=function(){E(!0),T("/invoices/list",{},function(e){var t=e.data.data.data;t.forEach(function(e,t){e.created_verbose=B.prettyPrint(R(e.created),{showTime:!0}),e.key=t}),E(!1),o(t)},e(),E,t)},p=[{title:"Offering",dataIndex:"account_name",key:"account_name"},{title:"Email",dataIndex:"customer_email",key:"customer_email"},{title:"Amount",dataIndex:"amount_due",key:"amount_due",align:"center",render:function(e,t){return r.a.createElement("span",null,function(e){return"".concat(I()(e.currency)).concat(Math.round(e.amount_due/100))}(t))}},{title:"Marked for",dataIndex:"metadata.marked_status",key:"marked_status",align:"center",render:function(e,t){if(t.metadata.marked_status)return r.a.createElement(z,{faint:!0,status:t.metadata.marked_status})},filters:[{text:"Draft",value:"draft"},{text:"Invoiced in error",value:"invoiced_in_error"},{text:"Waiver",value:"waiver"},{text:"Voucher",value:"voucher"},{text:"Refund",value:"refund"},{text:"Uncollectible",value:"uncollectible"},{text:"Open",value:"open"},{text:"Paid",value:"paid"}],onFilter:function(e,t){return t.status===e}},{title:"Current status",dataIndex:"status",key:"status",align:"center",render:function(e,t){return r.a.createElement(z,{status:t.metadata.hasOwnProperty("custom_status")?t.metadata.custom_status:e})},filters:[{text:"Draft",value:"draft"},{text:"Invoiced in error",value:"invoiced_in_error"},{text:"Waiver",value:"waiver"},{text:"Voucher",value:"voucher"},{text:"Refund",value:"refund"},{text:"Uncollectible",value:"uncollectible"},{text:"Open",value:"open"},{text:"Paid",value:"paid"}],onFilter:function(e,t){return t.status===e}},{title:"Created",dataIndex:"created_verbose",key:"created_verbose"},{title:"Action",dataIndex:"id",key:"action",render:function(a){return r.a.createElement(k.a,{arrow:!1,overlay:$(a,e(),v,t),placement:"bottomRight"},r.a.createElement(O.a,null,r.a.createElement(j.b,null,"Actions",r.a.createElement(A.a,null))))}}];return Object(n.useEffect)(function(){v()},[]),r.a.createElement("div",{className:"sheet"},r.a.createElement(j.b,null),r.a.createElement("h2",null,"Invoices "),r.a.createElement(x.a,{loading:d,dataSource:c,columns:p,onChange:H}))},q=a(664),J=a(305),K=a.n(J),Q=a(202),X=function(e,t,a,n){console.log("params",e,t,a,n)},Z=function(){var e=Object(_.c)(),t=Object(i.g)(),a=Object(n.useState)([]),l=Object(u.a)(a,2),c=l[0],s=l[1],m=Object(n.useState)(!1),d=Object(u.a)(m,2),v=d[0],p=d[1],f=[{title:"Report Category",dataIndex:"report_type",key:"report_type",render:function(e){return L(e)}},{title:"Size",dataIndex:"size",key:"size",render:function(e,t){return K()(t.result.size)+" KB"}},{title:"Created",dataIndex:"created",key:"created",render:function(e){return Q.prettyPrint(R(e))}},{title:"Interval",dataIndex:"parameters",key:"parameters",render:function(e){return"".concat(Q.prettyPrint(R(e.interval_start))," to ").concat(Q.prettyPrint(R(e.interval_end)),".")}},{title:"Action",dataIndex:"id",key:"action",colSpan:2,render:function(e,t){return"succeeded"==t.status?r.a.createElement(o.c,{to:"/sheet/report/view/"+e},r.a.createElement(O.a,{type:"primary",icon:r.a.createElement(E.a,null),block:!0},"View Report")):r.a.createElement(O.a,{disabled:!0,type:"primary",icon:r.a.createElement(q.a,null),block:!0},"Report ",t.status)}}];return Object(n.useEffect)(function(){p(!0),T("/reports/list",{},function(e){var t=e.data.data.data;t.forEach(function(e){e.key=e.id}),s(t),p(!1)},e(),p,t)},[]),r.a.createElement("div",{className:"sheet"},r.a.createElement(j.b,null),r.a.createElement("h1",null,"Reports "),r.a.createElement(x.a,{loading:v,dataSource:c,columns:f,onChange:X}))},ee=a(666),te=a(667),ae=a(650),ne=a(658),re=a(659),le=a(654),ce=a(655),oe=a(652),ie=a(653),ue=(a(548),a(67)),se=a.n(ue),me=ae.a.RangePicker,de=a(305),Ee=function(){var e=Object(n.useRef)(),t=Object(n.useState)([]),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!1),s=Object(u.a)(o,2),d=s[0],E=s[1],v=Object(n.useState)(!0),p=Object(u.a)(v,2),f=p[0],h=p[1],b=Object(n.useState)([]),g=Object(u.a)(b,2),y=g[0],k=g[1],x=Object(n.useState)(!1),w=Object(u.a)(x,2),A=w[0],S=w[1],I=Object(n.useState)(!0),N=Object(u.a)(I,2),Y=N[0],M=N[1],D=Object(n.useState)([]),P=Object(u.a)(D,2),R=P[0],F=P[1],L=Object(n.useState)(!1),G=Object(u.a)(L,2),z=G[0],B=G[1],U=Object(n.useState)(!0),W=Object(u.a)(U,2),$=W[0],H=W[1],V=Object(n.useState)([]),q=Object(u.a)(V,2),J=q[0],K=q[1],Q=Object(n.useState)(!1),X=Object(u.a)(Q,2),Z=X[0],ae=X[1],ue=Object(n.useState)(!0),Ee=Object(u.a)(ue,2),ve=Ee[0],pe=Ee[1],fe=Object(n.useState)([]),he=Object(u.a)(fe,2),be=he[0],ge=he[1],ye=Object(n.useState)(!1),_e=Object(u.a)(ye,2),Oe=_e[0],ke=_e[1],je=Object(n.useState)(!0),xe=Object(u.a)(je,2),we=xe[0],Ae=xe[1],Ce=Object(_.c)(),Se=Object(i.g)(),Ie=function(e){return d?d[e]:0},Ne=function(e){return A?A[e]:0},Ye=function(e){return z?z[e]:0},Me=function(e){return Z?Z[e]:0};Object(n.useEffect)(function(){!function(){var e=se()().subtract(1,"day"),t=e.startOf("day").unix(),a=e.endOf("day").unix();T("/reports/dashboard/day",{start:t,end:a},function(e){var t=e.data.data,a=0,n=0;t.forEach(function(e){var t=new Date;t.setHours(e._id.hour),e.total_amount/=100,e.hour=se()(t).format("hh a"),n+=e.count,a+=e.total_amount,delete e._id}),E({amount:a,count:n,amount_avg:Math.round(a/t.length),count_avg:Math.round(n/t.length)}),console.log("YESTERDAY AGGREGATE DATA",t),c(t)},Ce(),null,Se)}(),function(){var e=se()().subtract(1,"week"),t=e.startOf("day").unix(),a=e.endOf("day").unix();T("/reports/dashboard/week",{start:t,end:a},function(e){var t=e.data.data,a=0,n=0;t.forEach(function(e){e.date="".concat(e._id.year,"/").concat(e._id.month,"/").concat(e._id.day),e.total_amount/=100,n+=e.count,a+=e.total_amount,delete e._id}),console.log(t),S({amount:a,count:n,amount_avg:Math.round(a/t.length),count_avg:Math.round(n/t.length)}),console.log("LAST WEEK AGGREGATE DATA",t),k(t)},Ce(),null,Se)}(),function(){var e=se()().subtract(1,"month"),t=e.startOf("day").unix(),a=e.endOf("day").unix();T("/reports/dashboard/week",{start:t,end:a},function(e){var t=e.data.data,a=0,n=0;t.forEach(function(e){e.date="".concat(e._id.year,"/").concat(e._id.month,"/").concat(e._id.day),e.total_amount/=100,n+=e.count,a+=e.total_amount,delete e._id}),console.log(t),B({amount:a,count:n,amount_avg:Math.round(a/t.length),count_avg:Math.round(n/t.length)}),console.log("LAST MONTH AGGREGATE DATA",t),F(t)},Ce(),null,Se)}(),function(){var e=se()().subtract(1,"month"),t=e.startOf("day").unix(),a=e.endOf("day").unix();T("/reports/dashboard/year",{start:t,end:a},function(e){var t=e.data.data,a=0,n=0;t.forEach(function(e){e.date="".concat(e._id.year,"/").concat(e._id.month),e.total_amount/=100,n+=e.count,a+=e.total_amount,delete e._id}),ae({amount:a,count:n,amount_avg:Math.round(a/t.length),count_avg:Math.round(n/t.length)}),console.log("LAST YEAR AGGREGATE DATA",t),K(t)},Ce(),null,Se)}()},[]);var De={stroke:"rgb(80, 80, 80)",lineDash:[10,5],lineWidth:2,opacity:.75},Te={fill:"l(270) 0:#af7bb4b2 1:#165481ad"},Pe={xField:"hour",yField:"total_amount",annotations:[{type:"text",position:["min",Ie("amount_avg")],content:"Average Amount : $".concat(de(Ie("amount_avg"))),offsetY:-4,style:{textBaseline:"bottom"}},{type:"line",start:["min",Ie("amount_avg")],end:["max",Ie("amount_avg")],style:De}],meta:{hour:{alias:"Time",formatter:function(e){return"0"==e[0]?e.substring(1):e}},total_amount:{alias:"Amount",formatter:function(e){return"$ ".concat(de(e))}}},xAxis:{tickCount:24},smooth:!0,areaStyle:Te},Re={xField:"hour",yField:"count",annotations:[{type:"text",position:["min",Ie("count_avg")],content:"Average Count : ".concat(de(Ie("count_avg"))," Invoices"),offsetY:-4,style:{textBaseline:"bottom"}},{type:"line",start:["min",Ie("count_avg")],end:["max",Ie("count_avg")],style:De}],meta:{hour:{alias:"Time",formatter:function(e){return"0"==e[0]?e.substring(1):e}},count:{alias:"Invoice Count",formatter:function(e){return"".concat(e," Invoices")}}},xAxis:{tickCount:24},smooth:!0},Fe={xField:"date",yField:"total_amount",annotations:[{type:"text",position:["min",Ne("amount_avg")],content:"Average Amount : $".concat(de(Ne("amount_avg"))),offsetY:-4,style:{textBaseline:"bottom"}},{type:"line",start:["min",Ne("amount_avg")],end:["max",Ne("amount_avg")],style:De}],meta:{date:{alias:"Date",formatter:function(e){return se()(e,"YYYY/M/D").format("dddd, Do MMMM")}},total_amount:{alias:"Total Amount",formatter:function(e){return"$ ".concat(de(e))}}},smooth:!0,areaStyle:Te},Le={xField:"date",yField:"count",annotations:[{type:"text",position:["min",Ne("count_avg")],content:"Average Count : ".concat(de(Ne("count_avg"))," Invoices"),offsetY:-4,style:{textBaseline:"bottom"}},{type:"line",start:["min",Ne("count_avg")],end:["max",Ne("count_avg")],style:De}],meta:{date:{alias:"Date",formatter:function(e){return se()(e,"YYYY/M/D").format("dddd, DD MMMM")}},count:{alias:"Invoice Count",formatter:function(e){return"".concat(e," Invoices")}}},smooth:!0,areaStyle:Te},Ge={xField:"date",yField:"total_amount",annotations:[{type:"text",position:["min",Ye("amount_avg")],content:"Average Amount : $".concat(de(Ye("amount_avg"))),offsetY:-4,style:{textBaseline:"bottom"}},{type:"line",start:["min",Ye("amount_avg")],end:["max",Ye("amount_avg")],style:De}],meta:{date:{alias:"Date",formatter:function(e){return se()(e,"YYYY/M/D").format("Do MMM, YYYY")}},total_amount:{alias:"Total Amount",formatter:function(e){return"$ ".concat(de(e))}}},smooth:!0,areaStyle:Te},ze={xField:"date",yField:"count",annotations:[{type:"text",position:["min",Ye("count_avg")],content:"Average Count : ".concat(de(Ye("count_avg"))," Invoices"),offsetY:-4,style:{textBaseline:"bottom"}},{type:"line",start:["min",Ye("count_avg")],end:["max",Ye("count_avg")],style:De}],meta:{date:{alias:"Date",formatter:function(e){return se()(e,"YYYY/M/D").format("Do MMM, YYYY")}},count:{alias:"Invoice Count",formatter:function(e){return"".concat(e," Invoices")}}},smooth:!0,areaStyle:Te},Be={xField:"date",yField:"total_amount",annotations:[{type:"text",position:["min",Me("amount_avg")],content:"Average Amount : $".concat(de(Me("amount_avg"))),offsetY:-4,style:{textBaseline:"bottom"}},{type:"line",start:["min",Me("amount_avg")],end:["max",Me("amount_avg")],style:De}],meta:{date:{alias:"Date",formatter:function(e){return se()(e,"YYYY/M").format("Do MMM, YYYY (ddd)")}},total_amount:{alias:"Total Amount",formatter:function(e){return"$ ".concat(de(e))}}},smooth:!0,areaStyle:Te},Ue={xField:"date",yField:"count",annotations:[{type:"text",position:["min",Me("count_avg")],content:"Average Count : ".concat(de(Me("count_avg"))," Invoices"),offsetY:-4,style:{textBaseline:"bottom"}},{type:"line",start:["min",Me("count_avg")],end:["max",Me("count_avg")],style:De}],meta:{date:{alias:"Date",formatter:function(e){return se()(e,"YYYY/M").format("MMMM d, YYYY (dddd)")}},count:{alias:"Invoice Count",formatter:function(e){return"".concat(e," Invoices")}}},smooth:!0,areaStyle:Te};return r.a.createElement("div",{className:" statistic-wrapper sheet",style:{minHeight:"90vh"}},r.a.createElement("div",{className:"sheet menu range-picker"},r.a.createElement("h3",null,"Show for a Custom Time Range"),r.a.createElement(j.b,null,r.a.createElement(me,{onCalendarChange:function(e){e.length&&ge(e)}}),r.a.createElement(O.a,{onClick:function(){return function(){if(be.length<2)return C.a.warning({title:"Create Dashboard",description:"Please select start and end dates."});console.log(be[0].format(),be[1].format());var e=be[0].unix(),t=be[1].unix();T("/reports/dashboard/custom",{start:e,end:t},function(e){var t=e.data.data;t.forEach(function(e){e.date="".concat(e._id.year,"/").concat(e._id.month,"/").concat(e._id.day),e.total_amount/=100,delete e._id}),console.log("CUSTOM AGGREGATE DATA",t),ke(t)},Ce(),null,Se)}()},icon:r.a.createElement(m.a,null),shape:"round",type:"primary"},"Get data"))),!Oe&&r.a.createElement(ne.a,null,r.a.createElement(re.a,{span:6},r.a.createElement("div",{className:"statistic-card sheet"},r.a.createElement("h3",null,"Yesterday"),r.a.createElement("div",{className:"statistic-container",onMouseOver:function(){return e.current.goTo(0)}},r.a.createElement(ne.a,{gutter:16,justify:"space-between"},r.a.createElement(re.a,null,r.a.createElement(le.a,{loading:!d,title:"Amount",prefix:r.a.createElement(ee.a,null),value:d&&de(d.amount)})),r.a.createElement(re.a,null,r.a.createElement(le.a,{loading:!d,title:"Invoices",prefix:r.a.createElement(te.a,null),value:d&&de(d.count)})))))),r.a.createElement(re.a,{span:6},r.a.createElement("div",{className:"statistic-card sheet"},r.a.createElement("h3",null,"Last Week"),r.a.createElement("div",{className:"statistic-container",onMouseOver:function(){return e.current.goTo(1)}},r.a.createElement(ne.a,{gutter:16,justify:"space-between"},r.a.createElement(re.a,null,r.a.createElement(le.a,{loading:!A,title:"Amount",prefix:r.a.createElement(ee.a,null),value:A&&de(A.amount)})),r.a.createElement(re.a,null,r.a.createElement(le.a,{loading:!A,title:"Invoices",prefix:r.a.createElement(te.a,null),value:A&&de(A.count)})))))),r.a.createElement(re.a,{span:6},r.a.createElement("div",{className:"statistic-card sheet"},r.a.createElement("h3",null,"Last Month"),r.a.createElement("div",{className:"statistic-container",onMouseOver:function(){return e.current.goTo(2)}},r.a.createElement(ne.a,{gutter:16,justify:"space-between"},r.a.createElement(re.a,null,r.a.createElement(le.a,{loading:!z,title:"Amount",prefix:r.a.createElement(ee.a,null),value:z&&de(z.amount)})),r.a.createElement(re.a,null,r.a.createElement(le.a,{loading:!z,title:"Invoices",prefix:r.a.createElement(te.a,null),value:z&&de(z.count)})))))),r.a.createElement(re.a,{span:6},r.a.createElement("div",{className:"statistic-card sheet"},r.a.createElement("h3",null,"Last Yar"),r.a.createElement("div",{className:"statistic-container",onMouseOver:function(){return e.current.goTo(3)}},r.a.createElement(ne.a,{gutter:16,justify:"space-between"},r.a.createElement(re.a,null,r.a.createElement(le.a,{loading:!Z,title:"Amount",prefix:r.a.createElement(ee.a,null),value:Z&&de(Z.amount)})),r.a.createElement(re.a,null,r.a.createElement(le.a,{loading:!Z,title:"Invoices",prefix:r.a.createElement(te.a,null),value:Z&&de(Z.count)}))))))),Oe&&r.a.createElement("div",{className:"sheet"},r.a.createElement("div",{style:{display:"flex",flexFlow:"row",justifyContent:"space-between",alignItems:"center"}},2==be.length&&r.a.createElement("h2",null,"Viewing Data from ",be[0].format("Do MMMM, YYYY")," to ",be[1].format("Do MMMM, YYYY")),r.a.createElement(ce.a,{options:["Amount","Count"],onChange:function(e){return Ae("Amount"===e)}})),we?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Amount vs Date"),r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(ie.a,Object.assign({data:Oe},Ge)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Invoice Count vs Date"),r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(ie.a,Object.assign({data:Oe},ze))))),r.a.createElement("div",{className:"sheet"},r.a.createElement(oe.a,{ref:function(t){return e.current=t},dotPosition:"top",autoplaySpeed:5e3},r.a.createElement("div",{className:"carousel-container"},r.a.createElement("div",{className:"sheet menu"},r.a.createElement("div",null,r.a.createElement("h2",null,"Yesterday's Hourly Data")),r.a.createElement(ce.a,{options:["Amount","Count"],onChange:function(e){return h("Amount"===e)}})),f?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Amount vs Hour"),r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(ie.a,Object.assign({data:l},Pe)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Invoice Count vs Hour"),r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(ie.a,Object.assign({data:l},Re)))),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"carousel-container"},r.a.createElement("div",{className:"sheet menu"},r.a.createElement("div",null,r.a.createElement("h2",null,"Last Weeks's Data")),r.a.createElement(ce.a,{options:["Amount","Count"],onChange:function(e){return M("Amount"===e)}})),Y?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Amount vs Date"),r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(ie.a,Object.assign({data:y},Fe)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Invoice Count vs Date"),r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(ie.a,Object.assign({data:y},Le))))),r.a.createElement("div",{className:"carousel-container"},r.a.createElement("div",{className:"sheet menu"},r.a.createElement("div",null,r.a.createElement("h2",null,"Last Month's Data")),r.a.createElement(ce.a,{options:["Amount","Count"],onChange:function(e){return H("Amount"===e)}})),$?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Amount vs Date"),r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(ie.a,Object.assign({data:R},Ge)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Invoice Count vs Date"),r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(ie.a,Object.assign({data:R},ze)))),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"carousel-container"},r.a.createElement("div",{className:"sheet menu"},r.a.createElement("div",null,r.a.createElement("h2",null,"Last Year's Data")),r.a.createElement(ce.a,{options:["Amount","Count"],onChange:function(e){return pe("Amount"===e)}})),ve?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Amount vs Date"),r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(ie.a,Object.assign({data:J},Be)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Invoice Count vs Date"),r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(ie.a,Object.assign({data:J},Ue)))),r.a.createElement("div",null),r.a.createElement("div",null)))))},ve=(a(567),a(358),a(426)),pe=a(648),fe=a(212),he=a(202);var be=[{title:"No.",dataIndex:"dummy",key:"dummy",render:function(e,t,a){return a+1}},{title:"Description",dataIndex:"description",key:"description"},{title:"Type",dataIndex:"price",render:function(e){var t=e.type.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()});return t=t.replaceAll("_"," ")},key:"type"},{title:"Quantity",dataIndex:"quantity",key:"quantity"},{title:"Amount",dataIndex:"amount",key:"amount",render:function(e,t){return fe(t.currency)+Math.round(e/100)}}],ge=function(){var e=Object(_.c)(),t=Object(i.g)(),a=Object(i.h)().invoice_id,l=Object(n.useState)({}),c=Object(u.a)(l,2),o=c[0],s=c[1],m=Object(n.useState)([]),d=Object(u.a)(m,2),E=d[0],v=d[1];return Object(n.useEffect)(function(){T("/invoices/retrieve",{invoice_id:a},function(e){var t=e.data.data;s(t),v(t.lines.data)},e(),null,t)},[]),r.a.createElement("div",{className:"sheet"},r.a.createElement("div",{className:"sheet envelope no-margin"},o.id?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",null,o.customer_name?"".concat(o.customer_name.split(" ")[0],"'s Invoice"):"Invoice"," "),r.a.createElement("h3",null,o.number," for ",fe(o.currency)+o.amount_due,"  "),r.a.createElement("h3",null,"Due in ",he.relativeTime(R(o.due_date)),".  ")),r.a.createElement("div",{className:"envelope-sub"},r.a.createElement("div",{className:"row"},r.a.createElement("div",null,"Invoice ID :"),r.a.createElement("div",null,r.a.createElement(G.a,null,o.id))),r.a.createElement("div",{className:"row"},r.a.createElement("div",null,"Charge Date : "),r.a.createElement("div",null,r.a.createElement(G.a,null,he.prettyPrint(R(o.created),{showTime:!0})))),r.a.createElement("div",{className:"row",style:{marginTop:"1.2em",display:"flex",justifyContent:"flex-end",marginRight:"0.2em"}},r.a.createElement(O.a,{size:"huge",type:"primary",danger:!0,icon:r.a.createElement(w.a,null)},"Refund")))):r.a.createElement(ve.a,{active:!0})),o.id?r.a.createElement("div",{className:"sheet no-margin invoice-container"},r.a.createElement(ne.a,{gutter:16},r.a.createElement(re.a,{span:8},r.a.createElement("h2",null,"From"),r.a.createElement("div",{className:"bulky-divider"}),r.a.createElement("h3",null,o.account_name)),r.a.createElement(re.a,{span:8},r.a.createElement("h2",null,"To"),r.a.createElement("div",{className:"bulky-divider"}),o.customer_name&&r.a.createElement("h4",null,"Name : ",o.customer_name),o.customer_email&&r.a.createElement("h4",null,"Email : ",o.customer_email),o.customer_address&&r.a.createElement("h4",null,"Address : ",o.customer_address),o.customer_phone&&r.a.createElement("h4",null,"Phone : ",o.customer_phone)),r.a.createElement(re.a,{span:8},r.a.createElement("h2",null,"Details"),r.a.createElement("div",{className:"bulky-divider"}),r.a.createElement("h4",null,"Invoice total : ",fe(o.currency),Math.round(o.amount_due/100)),r.a.createElement("h4",null,"Status : ",r.a.createElement(z,{status:o.status})))),r.a.createElement(pe.a,null),r.a.createElement(x.a,{columns:be,dataSource:E})):r.a.createElement(ve.a,{active:!0}),r.a.createElement(pe.a,null))},ye=a(668),_e=(a(212),a(202));var Oe=function(){var e=Object(_.c)(),t=Object(i.g)(),a=Object(i.h)().report_id,l=Object(n.useState)({}),c=Object(u.a)(l,2),o=c[0],s=c[1],m=Object(n.useState)(!1),d=Object(u.a)(m,2),E=d[0],v=d[1],p=Object(n.useState)([]),f=Object(u.a)(p,2),h=f[0],b=f[1],g=Object(n.useState)([]),y=Object(u.a)(g,2),k=y[0],j=y[1];return Object(n.useEffect)(function(){T("/reports/retrieve",{report_id:a},function(a){var n=a.data.data;console.log(n),s(n),T("/reports/file",{file_id:n.result.id},function(e){var t=e.data.data,a=t.content,n=t.link;v(n);var r=[];for(var l in a[0])if(Object.hasOwnProperty.call(a[0],l)){if("category"==l)continue;var c={dataIndex:l,key:l},o=l.replaceAll("_"," ");c.title=o.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}),r.push(c)}j(r),b(a)},e(),null,t)},e(),null,t)},[]),r.a.createElement("div",{className:"sheet"},r.a.createElement("div",{className:"sheet envelope no-margin"},o.id?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",null,o?L(o.report_type):"Report"," "),o&&r.a.createElement("h3",null,"From ",r.a.createElement("u",null,_e.prettyPrint(R(o.parameters.interval_start)))," to ",r.a.createElement("u",null,_e.prettyPrint(R(o.parameters.interval_end)),"."))),r.a.createElement("div",{className:"envelope-sub"},r.a.createElement("div",{className:"row"},r.a.createElement("div",null,"Report ID :"),r.a.createElement("div",null,r.a.createElement(G.a,null,o.id))),r.a.createElement("div",{className:"row"},r.a.createElement("div",null,"Created On : "),r.a.createElement("div",null,r.a.createElement(G.a,null,_e.prettyPrint(R(o.created),{showTime:!0})))),r.a.createElement("div",{className:"row",style:{marginTop:"1.2em",display:"flex",justifyContent:"flex-end",marginRight:"0.2em"}},r.a.createElement(O.a,{target:"blank",href:E,disabled:!E,size:"huge",type:"primary",icon:r.a.createElement(ye.a,null),shape:"round"},"Download CSV")))):r.a.createElement(ve.a,{active:!0})),h&&r.a.createElement("div",{className:"sheet no-margin invoice-container"},r.a.createElement(x.a,{loading:0==h.length,columns:k,dataSource:h,pagination:!1})))};var ke=function(){var e=Object(i.g)(),t=Object(_.d)(),a=Object(_.f)(),l=Object(n.useState)(!0),c=Object(u.a)(l,2),h=c[0],g=c[1],O=Object(n.useState)({}),k=Object(u.a)(O,2),j=k[0],x=k[1],w=function(){g(!h)};return Object(n.useEffect)(function(){x(t())},[]),r.a.createElement(b.a,{style:{minHeight:"100vh"}},r.a.createElement(p.a,null,r.a.createElement(f.a,{className:"menubar",theme:"dark",style:{backgroundColor:"red !important"},mode:"horizontal"},r.a.createElement(f.a.Item,{onClick:function(){a(),e("/")},style:{marginLeft:"auto"},icon:r.a.createElement(s.a,null)},"Sign Out"))),r.a.createElement(b.a,null,r.a.createElement(y.a,{trigger:null,onMouseEnter:w,onMouseLeave:w,collapsible:!0,collapsed:h},r.a.createElement(f.a,{theme:"dark",mode:"inline"},r.a.createElement(f.a.Item,{key:0,icon:r.a.createElement(m.a,{className:"sidebar-icon"})},r.a.createElement(o.b,{to:"/sheet"},!h&&"Dashboard")),r.a.createElement(f.a.Item,{key:1,icon:r.a.createElement(d.a,{className:"sidebar-icon"})},r.a.createElement(o.b,{to:"/sheet/invoice/list"},!h&&"Access Invoices")),j.permissions&&j.permissions.access_reports||r.a.createElement(f.a.Item,{key:2,icon:r.a.createElement(E.a,{className:"sidebar-icon"})},r.a.createElement(o.b,{to:"/sheet/report/list"},!h&&"Check Reports")),j.isAdmin||r.a.createElement(f.a.Item,{key:3,icon:r.a.createElement(v.a,{className:"sidebar-icon"})},r.a.createElement(o.b,{to:"/sheet/users/list"},!h&&"Manage Users")))),r.a.createElement(b.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"",element:r.a.createElement(Ee,null)}),r.a.createElement(i.b,{path:"invoice/list",element:r.a.createElement(V,null)}),r.a.createElement(i.b,{path:"invoice/view/:invoice_id",element:r.a.createElement(ge,null)}),r.a.createElement(i.b,{path:"report/list",element:r.a.createElement(Z,null)}),r.a.createElement(i.b,{path:"report/view/:report_id",element:r.a.createElement(Oe,null)})))))},je=(a(641),a(651)),xe=a(424),we=a(660),Ae=a(671),Ce=a(281),Se=a(672),Ie=a(673),Ne=a(428),Ye=function(){var e=Object(n.useState)("hrushikeshchapke@gmail.com"),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("password"),o=Object(u.a)(c,2),s=o[0],m=o[1],d=Object(n.useState)(""),E=Object(u.a)(d,2),p=E[0],f=E[1],h=Object(n.useState)(""),b=Object(u.a)(h,2),g=b[0],y=b[1],k=Object(n.useState)(""),x=Object(u.a)(k,2),w=x[0],A=x[1],C=Object(n.useState)([]),S=Object(u.a)(C,2),I=S[0],N=S[1],Y=Object(n.useState)([]),M=Object(u.a)(Y,2),D=M[0],P=M[1],R=Object(_.e)(),F=Object(i.g)();return r.a.createElement("div",{className:"login-container"},r.a.createElement(Ne.a,{fill:"#7a7a7a2f",paused:!1,options:{height:360,amplitude:40,speed:.15,points:8},style:{position:"absolute",bottom:"0px",top:"0px",zIndex:"2 !important"}}),r.a.createElement("div",{className:"sheet login"},r.a.createElement(je.a,{tabPosition:"bottom"},r.a.createElement(je.a.TabPane,{tab:"Login",key:1},r.a.createElement(j.b,{direction:"vertical",align:"center",className:"fields-container"},r.a.createElement("h2",{style:{textDecoration:"underline"}},"Login"),r.a.createElement(xe.a,{onChange:function(e){return l(e.target.value)},type:"email",placeholder:"Enter E-mail",prefix:r.a.createElement(v.a,null)}),r.a.createElement(xe.a,{onChange:function(e){return m(e.target.value)},type:"password",placeholder:"Enter password",prefix:r.a.createElement(Ae.a,null)}),r.a.createElement("a",{className:"forgot-btn",href:"#"},"Forgot Password?"),I.map(function(e,t){return r.a.createElement(we.a,{icon:r.a.createElement(Ce.a,null),showIcon:!0,style:{fontSize:"0.8em"},message:e,key:t,type:"error"})}),r.a.createElement("br",null),r.a.createElement(O.a,{type:"primary",onClick:function(){return function(){var e=[];a||e.push("Please enter a valid e-mail."),s||e.push("Please enter your password."),e.length>0?N(e):T("/auth/login",{email:a,password:s},function(e,t){console.log("LOGIN CALL RESPONSE",e,t),e.data.token&&R({token:e.data.token,expiresIn:86400,tokenType:"Bearer",authState:e.data.user})&&F("/sheet/")})}()},icon:r.a.createElement(Se.a,null)},"Login"),r.a.createElement("br",null))),r.a.createElement(je.a.TabPane,{tab:"Register",key:2},r.a.createElement(j.b,{direction:"vertical",align:"center",className:"fields-container"},r.a.createElement("h2",{style:{textDecoration:"underline"}},"Register"),r.a.createElement(xe.a,{onChange:function(e){return f(e.target.value)},type:"email",placeholder:"Enter E-mail",prefix:r.a.createElement(v.a,null)}),r.a.createElement(xe.a,{onChange:function(e){return y(e.target.value)},type:"password",placeholder:"Enter password",prefix:r.a.createElement(Ae.a,null)}),r.a.createElement(xe.a,{onChange:function(e){return A(e.target.value)},type:"password",placeholder:"Confirm password",prefix:r.a.createElement(Ae.a,null)}),D.map(function(e,t){return r.a.createElement(we.a,{icon:r.a.createElement(Ce.a,null),showIcon:!0,style:{fontSize:"0.8em"},message:e,key:t,type:"error"})}),r.a.createElement("br",null),r.a.createElement(O.a,{onClick:function(){return function(){var e=[];p||e.push("Please enter a valid e-mail."),g||e.push("Please enter your password."),w||e.push("Please confirm your password."),g!==w&&e.push("Your passwords don't match, please try again."),e.length>0?P(e):T("/auth/register",{email:p,password:g},function(e,t){console.log("REGISTER CALL RESPONSE",e,t),e.data.token&&R({token:e.data.token,expiresIn:86400,tokenType:"Bearer",authState:e.data.user})&&F("/sheet/")})}()},type:"primary",icon:r.a.createElement(Ie.a,null)},"Register"),r.a.createElement("br",null))))))},Me=function(){return r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"",element:r.a.createElement(Ye,null)}))};c.a.render(r.a.createElement(_.a,{authType:"cookie",authName:"_auth",expiresIn:86400,cookieDomain:window.location.hostname,cookieSecure:"https:"===window.location.protocol},r.a.createElement(o.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",element:r.a.createElement(Me,null)}),r.a.createElement(i.b,{path:"sheet/*",element:r.a.createElement(_.b,{loginPath:"/"},r.a.createElement(ke,null))})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[447,1,2]]]);
//# sourceMappingURL=main.6b8e98ed.chunk.js.map