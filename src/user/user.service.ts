import { User } from "./user.interface";
import {UserModel} from "./user.model"

export const createUserInDB = async(user: User)=>{
    const result = await UserModel.create(user);
    return result
}

export const getUserFromDB = async()=>{
    const result = await UserModel.find();
    return result;
}

