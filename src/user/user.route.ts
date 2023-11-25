import express from "express";
import { createUser, getAllUsers, getSingleUser } from "./user.controller";

export const router = express.Router();

router.post('/',createUser);
router.get('/',getAllUsers);
router.get('/:userId',getSingleUser)