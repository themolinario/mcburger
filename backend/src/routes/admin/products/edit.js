import isEmpty from "../../../utils/isEmpty";
import DAO from "../../../dao";

const edit = async(req, res) => {
  let { picture, gallery, title, description, price, discountedPrice, currency, id } = req.fields;

  let product;

  let errors = {};

  if (isEmpty(id)) {
    errors.id = 'id-required';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ status: "error", ...errors });
  }

  try{
    product = await DAO.Products.findProductById(id);
  }catch (e) {
    return res.status(500).json({status:"error", message: 'database-read-error'});
  }

  if (!isEmpty(title)){
    product.title = title;
  }

  if (price){
    product.price = price;
  }

  if (!gallery){
    gallery = [];
  }

  product.picture = picture;
  product.gallery = gallery;
  product.description = description;
  product.discountedPrice = discountedPrice;
  product.currency = currency;

  try{
    product.save();
  }catch (e) {
    return res.status(500).json({status:"error", message: 'database-save-error'});
  }

  res.status(200).json({ status: "success", product });

};

export default edit;