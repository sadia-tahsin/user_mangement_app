import { Model } from "mongoose";

export type tOrder = {
     productName: string;
     price: number;
     quantity:number}

export type tUser = {
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
        orders: [tOrder]
    
}

export type IUser = {
    isFound(id:number):Promise<tUser|null>
    isFoundByName(name:string):Promise<tUser|null>
} & Model<tUser> // this is for including a static method