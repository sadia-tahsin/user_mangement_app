import { Model } from "mongoose";

export type User = {
        userId: number;
        username: string;
        password: string;
        fullName: {
            firstName: string;
            lastName: string;
        };
        age: number;
        email: string;
        isActive: boolean;
        hobbies: string[];
   
        address: {
            street: string;
            city: string;
            country: string

        };
        orders: [{
            productName: string;
            price: number
            quantity:number;
        }]
    
}
// export type UserInstanceMethod = {
//     isFound(id:number):Promise<User|null>
// }
//export type TUserModel = Model<User, Record<string,string>,UserInstanceMethod>;
export interface IUserModel extends Model<User>{
    isFound(id:string):Promise<User|null>
} 