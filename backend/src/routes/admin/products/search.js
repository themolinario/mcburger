import DAO from "../../../dao";

const search = async(req, res) => {
  let {title} = req.fields;

  let products;
  let count;

  try {
    products = await DAO.Products.findProductsByTitle(title);
  } catch (e) {
    return res.status(500).json({
      title: "database-read-error",
    });
  }

  try {
    count = await DAO.Products.countProductsByTitle(title);
  } catch (e) {
    return res.status(500).json({
      title: "database-read-error",
    });
  }

  if (!products) {
    return res.status(400).json({
      title: "title-not-found",
    });
  }

  res.status(200).json({ status: "success", products, count });
};

export default search;
