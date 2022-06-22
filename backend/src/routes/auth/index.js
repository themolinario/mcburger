import express from "express";
import passport from "passport";
import login from './login';
import user from './user';
import signUp from './sign-up';

const router = express.Router();

router.use('/login', login);
router.use('/user', passport.authenticate('jwt', {session: false}), user);
router.use('/sign-up', signUp);

export default router;