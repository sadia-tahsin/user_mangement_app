import { User, tOrder } from "./user.interface";
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

export const getSingleUserFromDB = async (id: number) => {
    const singleUser = await UserModel.isFound(id);

    if (singleUser) {
        const { userId, username, fullName, age, email, isActive, hobbies, address } = singleUser;
        const userData = { userId, username, fullName, age, email, isActive, hobbies, address };
        return userData;
    } else {
        throw new Error("User not found");
    }
};

export const updateUserInDB = async (user: User, id:number) => {
    const singleUser = await UserModel.isFound(id);

    if (singleUser) {
        const result = await UserModel.updateOne({ userId: id }, user);
        if(result.modifiedCount>0){
        const updatedUser = await UserModel.isFound(user.userId);   
        if (updatedUser){
            const { userId, username, fullName, age, email, isActive, hobbies, address } = updatedUser;
            const userData = { userId, username, fullName, age, email, isActive, hobbies, address };
            return userData;
            }
            
        }
       
    } else {
        throw new Error("User not found");
    }
};
export const deleteUserFromDB = async (id:number) => {
    const singleUser = await UserModel.isFound(id);

    if (singleUser) {
        const result = await UserModel.deleteOne({ userId: id });
        if(result.deletedCount>0){
        const updatedUser = await UserModel.isFound(id);   
        return updatedUser;
            }
       
    } else {
        throw new Error("User not found");
    }
};

export const updateUserOrderInDB = async (order:tOrder, id:number) => {
    const singleUser = await UserModel.isFound(id);

    if (singleUser) {
        const orders = singleUser.orders
        orders.push(order)
        console.log(orders)
        const result = await UserModel.updateOne({ userId: id },  { $set: { orders } });
        if(result.modifiedCount>0){
         return null
        }
       
    } else {
        throw new Error("User not found");
    }
};
    
 