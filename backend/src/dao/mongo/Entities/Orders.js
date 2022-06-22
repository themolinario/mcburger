import DAO from "../../index";

const addOrder = async(data) => {
  const order = new DAO.Mongo.Models.Order({
    orderNumber: data.orderNumber,
    status: data.status,
    totalPrice: data.totalPrice,
    currency: data.currency,
    products: data.products,
  })
    await order.save();
  return order;
};

const findOrderById = async(id) =>{
  return DAO.Mongo.Models.Order.findById(id);
};

const findOrderByOrderNumber = async(orderNumber = Number) => {
  return DAO.Mongo.Models.Order.findOne({orderNumber: orderNumber});
};

const findOrdersByStatus = async (status= '') => {
  return DAO.Mongo.Models.Order.find ({status: status});
}

const countOrderByStatus = async (status= '') => {
  return DAO.Mongo.Models.Order.countDocuments({status: status});
}

const removeOrderById = async (id) => {
  return DAO.Mongo.Models.Order.findByIdAndDelete(id);
};

const Orders = {
   addOrder, findOrderByOrderNumber, findOrdersByStatus, countOrderByStatus, removeOrderById, findOrderById,
};

export default Orders;