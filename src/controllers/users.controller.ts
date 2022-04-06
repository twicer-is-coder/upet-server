import { Request, Response } from 'express';

import User from '../models/users.model'
import { IUser } from '../../types/user'

class UserController {

    addUser = async (req: Request, res: Response) => {
        try {
            const user = await User.create(req.body as IUser)
            res.json({ message: "Success.", user: user })
        } catch (err: unknown) {
            const { message } = err as Error
            res.status(500).json({ message })
            console.log(err)
        }
    }

}

export default UserController;
