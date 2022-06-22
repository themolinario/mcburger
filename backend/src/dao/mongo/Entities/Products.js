import DAO from "../../index";
import config from "../../../../config";
import Product from "../Models/Product";



const addProduct = async (data) => {

  const product = new DAO.Mongo.Models.Product({
    picture: data.picture,
    gallery: data.gallery,
    title: data.title,
    description: data.description,
    price: data.price,
    discountedPrice: data.discountedPrice,
    currency: data.currency,
    owner: data.owner,
  })
    await product.save();
  return product;

};



const findProductsByTitle = async (title = '') => {
  return DAO.Mongo.Models.Product.find({ title: { $regex: '.*' + title + '.*' } });
};

const countProductsByTitle = async (title = '') => {
  return DAO.Mongo.Models.Product.countDocuments({ title: { $regex: '.*' + title + '.*' } });
};
const findProductById = async (id) => {
  return DAO.Mongo.Models.Product.findById(id);
};

const removeProductById = async (id) => {
  return DAO.Mongo.Models.Product.findByIdAndDelete(id);
};

const Products = {
  addProduct, findProductsByTitle, findProductById, removeProductById, countProductsByTitle
};

export default Products;