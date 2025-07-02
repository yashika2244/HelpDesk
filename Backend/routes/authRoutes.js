import express from 'express'
import { Signup, login } from '../controllers/authContorller.js';
const authRouter = express.Router();


authRouter.post("/signup", Signup);
authRouter.post("/login", login);

export default authRouter