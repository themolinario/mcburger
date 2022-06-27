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
  const id = req.fields.id;

  const exists = fs.existsSync(__dirname + '/' + id);

  if(!exists){
    return res.status(404).json({message: 'oggetto non trovato'});
  }

  let result;

  try {
    result = await DAO.Files.removeFile({
      id,
    });
  } catch (e) {
    return res.status(500).json({ status: 'error', message: 'database write error', generic: true });
  }

  fs.rmSync(__dirname + '/' + id)

  res.status(200).json({ status: "success", id, result });
}

export default upload;