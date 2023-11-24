import {Request, Response} from 'express';
import { createUserInDB, getUserFromDB} from "./user.service";

export const createUser = async(req:Request, res:Response)=>{
 try{ 
    const user = req.body
    const result = await createUserInDB(user)
    res.status(200).json({
        success: true,
        message: 'User created successfully!',
        data: result,
      });
    }
    catch(err){
        console.log(err)
    }

}
export const getAllUsers = async(req:Request, res:Response)=>{
    try{
        const result = await getUserFromDB()
        res.status(200).json({
            success: true,
            message: 'Users fetched successfully!',
            data: result,
          });
    } catch(err){
        console.log(err)
    }
}