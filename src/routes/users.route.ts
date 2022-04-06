import express from 'express';
import UserController from '../controllers/users.controller';
import { validateData } from '../middlewares/userDataValidate'

const router = express.Router();

router.use(express.json());

const controller = new UserController();

router.post('/', validateData, controller.addUser)

export default router;
