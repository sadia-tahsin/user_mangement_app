import {Request, Response} from 'express';
import { createUserInDB } from "./user.service";

export const createUser = async(req:Request, res:Response)=>{
    const user = req.body
    const result = await createUserInDB(user)
    res.send(result)

}