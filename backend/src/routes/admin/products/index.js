import add from './add';
import edit from './edit';
import search from './search';
import remove from './remove';
import express from "express";

const router = express.Router();

router.use('/add', add);
router.use('/edit', edit);
router.use('/search', search);
router.use('/remove', remove);

export default router;
