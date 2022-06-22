import express from "express";
import search from "./search";
import takeover from "./takeover";
import complete from "./complete";

const router = express.Router();

router.use('/search', search);
router.use('/takeover', takeover);
router.use('/complete', complete);

export default router;