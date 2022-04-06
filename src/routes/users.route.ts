import express from 'express';
import UserController from '../controllers/users.controller';

const router = express.Router();

router.use(express.json());

const controller = new UserController();

router.post('/', controller.addUser)

export default router;
