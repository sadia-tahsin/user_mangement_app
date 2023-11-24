import { Schema, model } from "mongoose";
import {  User } from "./user.interface";

const userSchema = new Schema<User>({
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
    orders: {type: [{
        productName: {type: String},
        price: {type: Number},
        quantity: {type: Number}
    }]}
    

})

export const UserModel = model<User>('User',userSchema);