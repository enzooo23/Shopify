const mongoose = require('mongoose');

const abandonedCheckoutSchema = new mongoose.Schema({
  id: { type: String, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
  cart_token: { type: String, required: true },
  customer_id: { type: String, required: true },
});

module.exports = mongoose.model('AbandonedCheckout', abandonedCheckoutSchema);
