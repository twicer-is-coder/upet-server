import { IUser } from '../../types/user'
import { Request, Response, NextFunction } from 'express'

const validateData: (req: Request, res: Response, next: NextFunction) => void = (req, res, next) => {

    const validatePassword: (password: string) => boolean = password => /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/.test(password)
    const validateEmail: (emailAdress: string) => boolean = emailAdress => {
        const regexEmail = /^\w+(.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (emailAdress.match(regexEmail))
            return true;
        else
            return false;
    }
    const { email, firstName, lastName, password, phoneNo } = req.body as IUser
    const errors: string[] = [];

    if (!validateEmail(email))
        errors.push("Invalid Email.")
    if (!validatePassword(password))
        errors.push("Invalid Password.")
    if (firstName === "")
        errors.push("First name cannot be empty.")
    if (lastName === "")
        errors.push("First name cannot be empty.")
    if (phoneNo === "")
        errors.push("Phone cannot be empty.")

    if (errors.length > 0) {
        res.json({ message: "Failed To Add User.", errors })
    } else next()

}

export { validateData }