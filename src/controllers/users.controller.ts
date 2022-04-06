import { Request, Response } from 'express';

import User from '../models/users.model'

class UserController {

    addUser = (_: Request, res: Response) => {
        try {
            res.json({ message: "success", user: "user" })
        } catch (err: unknown) {
            const { message } = err as Error
            res.status(500).json({ message })
        }
    }

}

export default UserController;
