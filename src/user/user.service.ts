import { User } from "./user.interface";
import {UserModel} from "./user.model"

export const createUserInDB = async(user: User)=>{
    const result = await UserModel.create(user);
    const {userId,username,fullName,age,email, isActive,hobbies,address}= result
    const userData =  {userId,username,fullName,age,email, isActive,hobbies,address}
    return userData
}

export const getUserFromDB = async()=>{
    const result = await UserModel.find();
    const users:Array<object> = []
    result.map(res=>{
        const {username,fullName,age,email,address}= res
        const data = {username,fullName,age,email,address}
        users.push(data)
     
    })
    return users;
}
export const getSingleUserFromDB = async(id:string)=>{
    const result = await UserModel.findOne({userId:id});
    const {userId,username,fullName,age,email, isActive,hobbies,address}= result
    const userData =  {userId,username,fullName,age,email, isActive,hobbies,address}
    return userData 
}

