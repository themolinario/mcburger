import 'colors';
import express from "express";
import passport from "passport";
import cors from "cors";
import formidable from "express-formidable";
import routes from "./src/routes";
import config from "./config";
import DAO from "./src/dao";
import JwtStrategy from "./src/strategies/JwtStrategy";

const init = async () => {

  await DAO.init();
  await DAO.Users.updateRootUser();

  const app = express();

  app.use(cors());
  app.use(formidable());

  app.use(passport.initialize({}));
  passport.use('jwt', JwtStrategy);

  app.use('/api/v1', routes);

  app.use('/', (req, res) => res.status(404).json({
    error: 'Risorsa non trovata',
  }));

  app.listen(config.port, () => {
    console.log('listening'.green)
  })
};


init().then(() => console.log('init complete'.green));
