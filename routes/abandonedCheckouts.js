const express = require('express');
const router = express.Router();
const AbandonedCheckout = require('../models/AbandonedCheckout');
const shopify = require('../app').shopify;

router.get('/', async (req, res) => {
  const abandonedCheckouts = await shopify.get('/abandoned_checkouts.json');
  const data = abandonedCheckouts.body.abandoned_checkouts;
  res.render('abandonedCheckouts', { data });
});

module.exports = router;
