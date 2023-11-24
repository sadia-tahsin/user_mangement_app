import express from "express";
import { createUser, getAllUsers } from "./user.controller";

export const router = express.Router();

router.post('/',createUser);
router.get('/',getAllUsers)