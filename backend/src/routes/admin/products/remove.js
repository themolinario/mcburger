import DAO from "../../../dao";

const remove = async(req, res) => {
  let {id} = req.fields;

  let product;

  try {
    product = await DAO.Products.findProductById(id);
  } catch (e) {
    return res.status(500).json({
      title: "database-read-error",
    });
  }

  if (!product) {
    return res.status(400).json({
      title: "title-not-found",
    });
  }

  try {
    product = await DAO.Products.removeProductById(id);
  } catch (e) {
    return res.status(500).json({
      title: "database-read-error",
    });
  }

  res.status(200).json({ status: "success", product });
};

export default remove;
