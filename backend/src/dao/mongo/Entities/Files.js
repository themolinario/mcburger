import DAO from "../../index";

const addFile = async(data) => {

  const file = new DAO.Mongo.Models.File({
    name: data.name,
    type: data.type,
  })
  await file.save();
  return file;

};

const findFileById = async (id) => {
  return DAO.Mongo.Models.File.findById(id);
};

const removeFile = async ({id}) => {
  return DAO.Mongo.Models.File.findByIdAndRemove(id);
};

const Files = {
  addFile, findFileById, removeFile,
};

export default Files;