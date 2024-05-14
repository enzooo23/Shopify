const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  id: { type: String, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
  customer_id: { type: String, required: true },
  total_price: { type: Number, required: true },
});

module.exports = mongoose.model('Order', orderSchema);
