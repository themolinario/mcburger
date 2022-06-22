import express from "express";
import products from './products';
import users from './users';

const router = express.Router();

router.use((req, res, next) => {
  if (!(req.user.roles || []).includes('admin')) {
   res.status(401).json({
     message: 'devi essere un admin!',
   });
  } else {
    next();
  }
});

router.use('/products', products);
router.use('/users', users);

export default router;