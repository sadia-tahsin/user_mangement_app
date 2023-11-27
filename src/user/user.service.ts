import { tUser, tOrder } from "./user.interface";
import { UserModel } from "./user.model";

const createUserInDB = async (user: tUser) => {
  const result = await UserModel.create(user);

  // destructuring to get the necessary fields
  const { userId, username, fullName, age, email, isActive, hobbies, address } =
    result;
  const userData = {
    userId,
    username,
    fullName,
    age,
    email,
    isActive,
    hobbies,
    address,
  }; // This userData object contains the extracted fields from the result object
  return userData;
};

const getUsersFromDB = async () => {
  const result = await UserModel.find().select({
    _id: 0,
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
  }); // field filterring is applied to retrieve only the necessary fields

  // The array and mapping is used to ensure the sequence of the fields
  const users: Array<object> = [];
  result.map((res) => {
    const { username, fullName, age, email, address } = res;
    const data = { username, fullName, age, email, address };
    users.push(data);
  });

  return users;
};

const getSingleUserFromDB = async (id: number) => {
  const singleUser = await UserModel.isFound(id); // checking if the user exists or not

  if (singleUser) {
    const {
      userId,
      username,
      fullName,
      age,
      email,
      isActive,
      hobbies,
      address,
    } = singleUser; // destructuring to get the necessary fields

    const userData = {
      userId,
      username,
      fullName,
      age,
      email,
      isActive,
      hobbies,
      address,
    };
    return userData;
  } else {
    throw new Error("User not found");
  }
};

const updateUserInDB = async (user: tUser, id: number) => {
  const singleUser = await UserModel.isFound(id); // checking if the user exists or not

  if (singleUser) {
    const result = await UserModel.updateOne({ userId: id }, user);
    if (result.modifiedCount > 0) {
      const updatedUser = await UserModel.isFound(user.userId);
      if (updatedUser) {
        const {
          userId,
          username,
          fullName,
          age,
          email,
          isActive,
          hobbies,
          address,
        } = updatedUser; // destructuring to get the necessary fields

        const userData = {
          userId,
          username,
          fullName,
          age,
          email,
          isActive,
          hobbies,
          address,
        };
        return userData;
      }
    }
  } else {
    throw new Error("User not found");
  }
};
const deleteUserFromDB = async (id: number) => {
  const singleUser = await UserModel.isFound(id); // checking if the user exists or not

  if (singleUser) {
    const result = await UserModel.deleteOne({ userId: id });
    if (result.deletedCount > 0) {
      const updatedUser = await UserModel.isFound(id);
      return updatedUser;
    }
  } else {
    throw new Error("User not found");
  }
};

const updateUserOrderInDB = async (order: tOrder, id: number) => {
  const singleUser = await UserModel.isFound(id); // checking if the user exists or not

  if (singleUser) {
    const orders = singleUser.orders;
    orders.push(order); // adding the new order to the existing order list

    const result = await UserModel.updateOne(
      { userId: id },
      {
        $set: { orders },
      }
    );
    if (result.modifiedCount > 0) {
      return null;
    }
  } else {
    throw new Error("User not found");
  }
};

const getOrdersFromDB = async (id: number) => {
  const singleUser = await UserModel.isFound(id); // checking if the user exists or not

  if (singleUser) {
    const result = singleUser.orders;
    const orders: Array<object> = [];
    result.map((res) => {
      const { productName, price, quantity } = res;
      const data = { productName, price, quantity };
      orders.push(data);
    });
    return orders;
  } else {
    throw new Error("User not found");
  }
};

const getTotalPriceFromDB = async (id: number) => {
  const singleUser = await UserModel.isFound(id); // checking if the user exists or not

  if (singleUser) {
    const result = singleUser.orders;
    let totalPrice = 0;

    result.map((res) => {
      totalPrice = totalPrice + res.price * res.quantity;
    });

    return { totalPrice };
  } else {
    throw new Error("User not found");
  }
};
export const userServices = {
  createUserInDB,
  deleteUserFromDB,
  getOrdersFromDB,
  getSingleUserFromDB,
  getTotalPriceFromDB,
  getUsersFromDB,
  updateUserInDB,
  updateUserOrderInDB,
};
