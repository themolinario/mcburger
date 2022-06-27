import isEmpty from "../../../utils/isEmpty";
import DAO from "../../../dao";

const edit = async(req, res) => {
  let { products, id } = req.fields;

  let order;

  let errors = {};

  if (isEmpty(id)) {
    errors.id = 'id-required';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ status: "error", ...errors });
  }

  try{
    order = await DAO.Orders.findOrderById(id);
  }catch (e) {
    return res.status(500).json({status:"error", message: 'database-read-error'});
  }

  order.products = products;

  try{
    order.save();
  }catch (e) {
    return res.status(500).json({status:"error", message: 'database-save-error'});
  }

  res.status(200).json({ status: "success", order });

};

export default edit;