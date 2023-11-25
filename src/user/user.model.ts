import { Schema, model } from "mongoose";
import {  TUserModel, User, UserInstanceMethod } from "./user.interface";

const userSchema = new Schema<User,TUserModel,UserInstanceMethod>({
    userId: { type: Number},
    username: {type: String},
    password: {type: String},
    fullName: {
        firstName:{ type: String},
        lastName:{ type: String}
    },
    age: { type: Number },
    email: {type: String},
    isActive: {type: Boolean},
    hobbies: { type: [String]},
    address: {
       street: {type: String},
       city: {type: String},
       country: {type: String}
    },
    orders: {type: [{
        productName: {type: String},
        price: {type: Number},
        quantity: {type: Number}
    }]}
    

})
userSchema.methods.isFound = async function(id:number) {
    const user = await UserModel.findOne({userId:id})
    return user
}
export const UserModel = model<User,TUserModel>('User',userSchema);