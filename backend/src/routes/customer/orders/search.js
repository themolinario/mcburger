import DAO from "../../../dao";
import isEmpty from "../../../utils/isEmpty";

const search = async(req, res) => {
  let { orderNumber } = req.fields;

  let order;

  let errors = {};


  if(isEmpty(orderNumber)) {
    errors.orderNumber = 'order-number-required';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ status: "error", ...errors });
  }

  try{
    order = await DAO.Orders.findOrderByOrderNumber(orderNumber);
  }catch (e) {
    return res.status(500).json({
      orderNumber: "database-read-error",
    });
  }

  if (!order) {
    return res.status(400).json({
      orderNumber: "order-not-found",
    });
  }

  res.status(200).json({ status: "success", order});

};

export default search;