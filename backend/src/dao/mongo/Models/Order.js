import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const OrderSchema = new Schema({
  orderNumber: {
    type: Number,
    require: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  status: String || '',
  totalPrice: Number,
  currency: String,
  products: [{
    type: ObjectId,
    ref: 'Product',
  }],
});

const Order = mongoose.model('Order', OrderSchema);

export default Order;