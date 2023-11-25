import { Schema, model } from "mongoose";
import {   User,  IUserModel } from "./user.interface";
import bcrypt from 'bcrypt'
import config from "../config";
const userSchema = new Schema<User,IUserModel>({
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

//using pre hook for hashing the password
userSchema.pre('save',async function(next){
   this.password = await bcrypt.hash(this.password,Number(config.bcrypt_salt));
   next();
})

userSchema.statics.isFound = async function (id:number) {
    const specificUser = await UserModel.findOne({userId:id});
    return specificUser;

}
export const UserModel = model<User,IUserModel>('User',userSchema);