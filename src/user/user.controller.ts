import {Request, Response} from 'express';
import { createUserInDB, deleteUserFromDB, getOrdersFromDB, getSingleUserFromDB, getTotalPriceFromDB, getUserFromDB, updateUserInDB, updateUserOrderInDB} from "./user.service";
import Joi from 'joi'
import JoiValidationSchema from './user.validation';


export const createUser = async(req:Request, res:Response)=>{
 try{ 
   

    const user = req.body
    const {error, value} = JoiValidationSchema.validate(user)
    if(error){
        res.status(404).json({
            success: false,
            message: 'something went wrong',
            error
    })
    }
    const result = await createUserInDB(user)
   
    res.status(200).json({
        success: true,
        message: 'User created successfully!',
        data: result,
      });
    }
    catch(err:any){
        res.status(404).json({
            "success": false,
            "message": err.message,
            
         })
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


            export const getUserOrder = async(req:Request, res:Response)=>{
                try{ 
                  
                   const id = Number(req.params.userId)
                   const result = await getOrdersFromDB(id)
                  
                   res.status(200).json({
                       success: true,
                       message:  "Order fetched successfully!",
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
    
                
            export const getTotalPrice = async(req:Request, res:Response)=>{
                try{ 
                  
                   const id = Number(req.params.userId)
                   const result = await getTotalPriceFromDB(id)
                  
                   res.status(200).json({
                       success: true,
                       message: "Total price calculated successfully!",
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
    