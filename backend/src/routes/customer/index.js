import express from "express";
import orders from './orders';

const router = express.Router();
router.use((req, res, next) => {
  if (!(req.user.roles || []).includes('standard')) {
    res.status(401).json({
      message: 'non sei un cliente!',
    });
  } else {
    next();
  }
});

router.use('/orders', orders);

export default router;