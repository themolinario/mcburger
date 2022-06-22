import DAO from "../../index";

const countLogsByTimestamp = async (timestamp) => {
  return DAO.Mongo.Models.Log.countDocuments(timestamp);
}

const Logs = {
  countLogsByTimestamp,
};

export default Logs;