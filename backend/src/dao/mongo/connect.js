import mongoose from 'mongoose';
import config from '../../../config';

const { mongo } = config;

const connect = () => new Promise((resolve, reject) => {
  const uri = mongo.uri;

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: false,
  }, (err) => {
    if (err) {
      if (config.verbose) {
        console.error(err);
      }
      reject(err);
    } else {
      resolve();
    }
  });
});

export default connect;
