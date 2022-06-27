import DAO from "../../dao";
import isEmpty from "../../utils/isEmpty";

const update = async(req, res) => {
 let { name, id } = req.fields;

 let file;

 let errors = {};

  if (isEmpty(id)) {
    errors.id = 'id-required';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ status: "error", ...errors });
  }

  try{
    file = await DAO.Files.findFileById(id);
  }catch (e) {
    return res.status(500).json({status:"error", message: 'database-read-error'});
  }

  file.id = id;
  file.name = name;

  try{
    file.save();
  }catch (e) {
    return res.status(500).json({status:"error", message: 'database-save-error'});
  }

  res.status(200).json({ status: "success", file });
};

export default update;