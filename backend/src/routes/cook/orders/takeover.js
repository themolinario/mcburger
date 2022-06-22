import DAO from "../../../dao";
import isEmpty from "../../../utils/isEmpty";

const takeover = async(req, res) => {
  let {orderNumber, status, totalPrice, currency, products, timestamp,} = req.fields;

  let order;

  if (isEmpty(orderNumber)) {
    return res.status(400).json({
      orderNumber: 'order-number-required',
    });
  }

  try{
    order = await DAO.Orders.findOrderByOrderNumber(orderNumber);
  }catch (e) {
    return res.status(500).json({status:"error", message: 'database-read-error'});
  }

  if (!isEmpty(orderNumber)){
    order.orderNumber = orderNumber;
  }

  if (totalPrice){
    order.totalPrice = totalPrice;
  }

  if(!products){
    products =[];
  }

  order.timestamp = Date.now();
  order.products = products;
  order.currency = currency;
  order.status = status;

  try{
    order.save();
  }catch (e) {
    console.log(e);
    return res.status(500).json({status:"error", message: 'database-save-error'});
  }

  res.status(200).json({ status: "success", order });

};

export default takeover;