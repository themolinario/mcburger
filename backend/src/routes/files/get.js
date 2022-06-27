import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const get = async(req,res) => {
  const id = req.params.id;
  const exists = fs.existsSync(__dirname + '/' + id);

  if(!exists){
    return res.status(404).json({message: 'oggetto non trovato'});
  }

  const stream = fs.createReadStream(__dirname + '/' + id);

  stream.pipe(res);

}

export default get;