import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  getTotalPrice,
  getUserOrder,
  updateUser,
  updateUserOrder,
} from "./user.controller";

export const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:userId", getSingleUser);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

router.put("/:userId/orders", updateUserOrder);
router.get("/:userId/orders", getUserOrder);
router.get("/:userId/orders/total-price", getTotalPrice);
