import isEmpty from "../../../utils/isEmpty";
import DAO from "../../../dao";

const add = async(req, res) => {
  let { picture, gallery, title, description, price, discountedPrice, currency, owner } = req.fields;

  let product;

  let errors = {};

  if (isEmpty(title)) {
    errors.title = 'title-required';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ status: "error", ...errors });
  }

  try {
    product = await DAO.Products.addProduct({
      picture: picture,
      gallery: gallery,
      title: title,
      description: description,
      price: price,
      discountedPrice: discountedPrice,
      currency: currency,
      owner,
    });
  } catch (e) {
    return res.status(500).json({ status: 'error', message: 'database write error', generic: true });
  }

  product = product.toObject();
  product.id = product._id;

  res.status(200).json({ status: "success", product });

};

export default add;