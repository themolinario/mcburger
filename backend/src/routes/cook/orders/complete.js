import DAO from "../../../dao";

const complete = async(req, res) =>{
  let {id} = req.fields;

  let order;

  try {
    order = await DAO.Orders.findOrderById(id);
  } catch (e) {
    return res.status(500).json({
      id: "database-read-error",
    });
  }

  if (!order) {
    return res.status(400).json({
      id: "order-not-found",
    });
  }

  try {
    order = await DAO.Orders.removeOrderById(id);
  } catch (e) {
    return res.status(500).json({
      id: "database-read-error",
    });
  }

  res.status(200).json({ status: "success", order });
};

export default complete;