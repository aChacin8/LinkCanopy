import { Request, Response } from "express"; //Para evitar el any en req y res
import User from "../models/Users";
import { hashPassword } from "../utils/auth";

export const createUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        const userExist = await User.findOne({ email }) //findOne es como un Where

        if (userExist) {
            const error = new Error('The User already exist')
            res.status(409).json({ error: error.message })
        }

        const user = new User(req.body)
        user.password = await hashPassword(password)

        await user.save()

        res.status(201).send('User Created')
    } catch (error) {
        res.status(400).send ('Bad Syntax, try again')
    }
}