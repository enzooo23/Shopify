const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const shopify = require('../app').shopify;

router.get('/', async (req, res) => {
  const orders = await shopify.get('/orders.json');
  const data = orders.body.orders;
  res.render('orders', { data });
});

module.exports = router;
