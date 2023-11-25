import {Request, Response} from 'express';
import { createUserInDB, deleteUserFromDB, getSingleUserFromDB, getUserFromDB, updateUserInDB, updateUserOrderInDB} from "./user.service";

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
            data: result
          });
    } catch(err){
        console.log(err)
    }
}
export const getSingleUser = async(req:Request, res:Response)=>{
    try{
        const id = Number(req.params.userId) ;
        const user = await getSingleUserFromDB(id)
        res.status(200).json({
            success: true,
            message: 'User fetched successfully!',
            data: user
          });

    } catch(err:any){
        res.status(404).json({
            "success": false,
            "message": err.message,
            "error": {
                "code": 404,
                "description": "User not found!"
            }
    })
}}

export const updateUser = async(req:Request, res:Response)=>{
    try{ 
       const user = req.body
       const id = Number(req.params.userId)
       const result = await updateUserInDB(user,id)
      
       res.status(200).json({
           success: true,
           message: 'User updated successfully!',
           data: result,
         });
       }
       catch(err:any){
        res.status(404).json({
            "success": false,
            "message": err.message,
            "error": {
                "code": 404,
                "description": "User not found!"
            }
         })
       }
    }
    export const deleteUser = async(req:Request, res:Response)=>{
        try{ 
           
           const id = Number(req.params.userId)
           const result = await deleteUserFromDB(id)
          
           res.status(200).json({
               success: true,
               message: "User deleted successfully!",
               data: result,
             });
           }
           catch(err:any){
            res.status(404).json({
                "success": false,
                "message": err.message,
                "error": {
                    "code": 404,
                    "description": "User not found!"
                }
             })
           }
        }
        export const updateUserOrder = async(req:Request, res:Response)=>{
            try{ 
               const order = req.body
               const id = Number(req.params.userId)
               const result = await updateUserOrderInDB(order,id)
              
               res.status(200).json({
                   success: true,
                   message:  "Order created successfully!",
                   data: result,
                 });
               }
               catch(err:any){
                res.status(404).json({
                    "success": false,
                    "message": err.message,
                    "error": {
                        "code": 404,
                        "description": "User not found!"
                    }
                 })
               }
            }