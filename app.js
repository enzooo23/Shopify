const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { Shopify } = require('@shopify/shopify-api');

mongoose.connect('mongodb://localhost/shopify-app', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const shopify = new Shopify({
  shopName: 'your-shop-name',
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret',
  scopes: ['read_abandoned_checkouts', 'read_orders', 'read_refunds', 'read_fulfillments'],
  autoLimit: true,
});

app.use('/abandoned-checkouts', require('./routes/abandonedCheckouts'));
app.use('/orders', require('./routes/orders'));
app.use('/refunds', require('./routes/refunds'));
app.use('/fulfillments', require('./routes/fulfillments'));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
