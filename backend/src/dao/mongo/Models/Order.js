import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const OrderSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },

  Products: [{
    type: ObjectId,
    ref: 'Product',
  }],
});

const Order = mongoose.model('Order', OrderSchema);

export default Order;