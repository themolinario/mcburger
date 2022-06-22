import DAO from "../../../dao";
import isEmpty from "../../../utils/isEmpty";

const search = async(req, res) => {
  let {status} = req.fields;

  let order;
  let count;

  if(isEmpty(status)){
    return res.status(400).json({
      status: 'status-required',
    });
  }

  try{
    order = await DAO.Orders.findOrdersByStatus(status);
  }catch (e) {
    return res.status(500).json({
      status: "database-read-error",
    });
  }

  try {
    count = await DAO.Orders.countOrderByStatus(status);
  } catch (e) {
    return res.status(500).json({
      status: "database-read-error",
    });
  }

  if (!order) {
    return res.status(400).json({
      status: "no-order-found",
    });
  }

  res.status(200).json({ status: "success", order, count });
}

export default search;