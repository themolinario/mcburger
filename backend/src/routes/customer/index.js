import express from "express";
import orders from './orders';

const router = express.Router();

router.use('/orders', orders);

export default router;