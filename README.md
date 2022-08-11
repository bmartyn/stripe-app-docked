# stripe-app-docked

Description of the project:
The goal of this project is to interface with the Stripe API and provide some minor improvements to the standard features provided by the Stripe portal.

the project includes a user management tool, that allows permission control for all added users.
The project also has a screen to list out invoices from the Stripe account and to alter the status of the invoices. In this module, the additional feature is the "mark as" feature, which adds a tag to the invoice, and does not modify the actual invoice status.

Both invoicing and reports in this project support custom statuses which are mapped to existing Stripe statuses. 

For example, the Stripe status of paid may have 3 statuses in the project mapped to it. Paid, Voucher, Waiver. Where the last 2 refer to how it was paid. The relevant details can be tracked using custom fields. Invoiced in Error in this project refers to Void in Stripe.

There are terms like Gross Invoiced Value in this project, which refer to the Gross amount in Stripe.

The reports feature basically uses the Stripe objects for reports, but allows the use of custom status which mapped to Stripe, and custom terminology.
