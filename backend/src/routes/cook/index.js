import express from "express";
import orders from './orders';

const router = express.Router();

router.use((req, res, next) => {
  if (!(req.user.roles || []).includes('cook')) {
    res.status(401).json({
      message: 'devi essere un cuoco!',
    });
  } else {
    next();
  }
});

router.use('/orders', orders);

export default router;