import DAO from "../../index";

const addOrders = async(data) => {
  const order = new DAO.Mongo.Models.Order({
    orderNumber: data.orderNumber,
    timestamp: Date.now(),
    status: data.status,
    totalPrice: data.totalPrice,
    currency: data.currency,
    products: data.products,
  })
    await order.save();
  return order;
};


const Orders = {
  addOrders,
};

export default Orders;