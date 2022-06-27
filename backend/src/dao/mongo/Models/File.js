import mongoose from "mongoose";

const { Schema } = mongoose;


const FileSchema = new Schema({

  name: String,
  type: String,
});

const File = mongoose.model('File', FileSchema);

export default File;