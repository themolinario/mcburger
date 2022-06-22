import DAO from "../../../dao";
import isEmpty from "../../../utils/isEmpty";

const add = async(req, res) => {
  let {orderNumber, status, totalPrice, currency, products} = req.fields;

  let order;

  let errors = {};

  if(isEmpty(orderNumber)) {
    errors.orderNumber = 'order-number-required';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ status: "error", ...errors });
  }

  try {
    order = await DAO.Orders.addOrder({
      orderNumber: orderNumber,
      status: status,
      totalPrice: totalPrice,
      currency: currency,
      products: products,
    })
  }catch (e) {
    return res.status(500).json({ status: 'error', message: 'database write error', generic: true });
  }

  order = order.toObject();
  order.id = order._id;

  res.status(200).json({ status: "success", order });
};

export default add;