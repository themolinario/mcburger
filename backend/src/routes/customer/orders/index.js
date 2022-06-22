import express from "express";
import add from './add';
import search from './search';

const router = express.Router();


router.use('/add', add);
router.use('/search', search);

export default router;
