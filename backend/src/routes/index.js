import express from "express";
import auth from './auth';
import admin from './admin';
import passport from "passport";
import cook from './cook';
import customer from './customer';

const router = express.Router();

router.use('/auth', auth);
router.use('/admin', passport.authenticate('jwt', {session: false}), admin);
router.use('/cook', cook);
router.use('/customer', customer);

export default router;