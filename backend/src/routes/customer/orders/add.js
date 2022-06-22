import DAO from "../../../dao";
import isEmpty from "../../../utils/isEmpty";

const add = async(req, res) => {
  let {orderNumber, timestamp, status, totalPrice, currency, products} = req.fields;

  let order;

  let errors = {};

  if(isEmpty(orderNumber)) {
    errors.orderNumber = 'order-number-required';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ status: "error", ...errors });
  }

  try {
    order = await DAO.Orders.addOrders({
      orderNumber: orderNumber,
      timestamp: timestamp,
      status: status,
    })
  }catch (e) {

  }
};