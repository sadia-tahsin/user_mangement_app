/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { userServices } from "./user.service";
import JoiValidationSchema from "./user.validation";

// Creating a new user
const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const validUser = await JoiValidationSchema.validateAsync(user); // validating data 
    const result = await userServices.createUserInDB(validUser);

    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

// Retrieve all users
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getUsersFromDB();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

// Retrieve a specific user
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.userId);
    const user = await userServices.getSingleUserFromDB(id);
    res.status(200).json({
      success: true,
      message: "User fetched successfully!",
      data: user,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err.message,
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

// Update a user
const updateUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    
    const id = Number(req.params.userId);
    const result = await userServices.updateUserInDB(user, id);

    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err.message,
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

// Delete a user
const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.userId);
    const result = await userServices.deleteUserFromDB(id);

    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err.message,
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

// Update user by adding a new order
const updateUserOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const id = Number(req.params.userId);
    const result = await userServices.updateUserOrderInDB(order, id);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err.message,
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

// Retrieve orders of a specific user
const getUserOrder = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.userId);
    const result = await userServices.getOrdersFromDB(id);

    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err.message,
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

// Get total price of orders for a specific user
const getTotalPrice = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.userId);
    const result = await userServices.getTotalPriceFromDB(id);

    res.status(200).json({
      success: true,
      message: "Total price calculated successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err.message,
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};
export const userControllers = {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  getTotalPrice,
  getUserOrder,
  updateUser,
  updateUserOrder,
};
