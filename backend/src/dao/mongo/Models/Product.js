import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const ProductSchema = new Schema({
  picture: {
    type: String,
    require: true,
  },
  gallery: [{
    type: String,
  }],
  title: String,
  description: String,
  price: Number,
  discountedPrice: Number,
  currency: String,
  owner: {
    type: ObjectId,
    ref: 'User',
  },
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;