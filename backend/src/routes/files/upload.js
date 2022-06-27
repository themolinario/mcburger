/*1. file dentro req.files
* 2. crea new File
* 3. usare fs per salvare file su filesystem salvare con nome id
* 4. altra rotta per il prodotto update product picture
* 5. questo id del file diventa picture del prodotto */

import DAO from "../../dao";
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const upload = async(req, res) => {
  let file = req.files.picture;
  console.log(file);
  try {
    file = await DAO.Files.addFile({
      name: file.name,
      type: file.type,
    });
  } catch (e) {
    return res.status(500).json({ status: 'error', message: 'database write error', generic: true });
  }

  file = file.toObject();
  file.id = file._id;

  const reader = fs.createReadStream(req.files.picture.path);
  const writer = fs.createWriteStream(__dirname + '/' + file.id);

  reader.pipe(writer);

  res.status(200).json({ status: "success", file });
}

export default upload;