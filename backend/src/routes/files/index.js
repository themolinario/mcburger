import express from "express";
import upload from "./upload";
import remove from "./remove";
import get from "./get";
import passport from "passport";

const router = express.Router();

router.use('/remove', passport.authenticate('jwt', {session: false}), remove);
router.use('/upload', passport.authenticate('jwt', {session: false}), upload);
router.use('/get/:id', get);

export default router;