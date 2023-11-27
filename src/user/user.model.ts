import { Schema, model } from "mongoose";
import { tUser, IUser } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../config";

const userSchema = new Schema<tUser, IUser>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String,  required: true },
  },
  age: { type: Number,  required: true },
  email: { type: String,  required: true },
  isActive: { type: Boolean,  required: true },
  hobbies: { type: [String],  required: true },
  address: {
    street: { type: String,  required: true },
    city: { type: String ,  required: true},
    country: { type: String ,  required: true},
  },
  orders: {
    type: [
      {
        productName: { type: String ,  required: true},
        price: { type: Number,  required: true },
        quantity: { type: Number ,  required: true},
      },
    ],
  },
});

//using pre hook for hashing the password
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt));
  next();
});

// a static method to determine if the user exist or not
userSchema.statics.isFound = async function (id: number) {
  const specificUser = await UserModel.findOne({ userId: id });
  return specificUser;
};

// it is to ensure the uniqueness of the username
userSchema.statics.isFoundByName = async function (name: string) {
  const specificUser = await UserModel.findOne({ username: name });
  return specificUser;
};

export const UserModel = model<tUser, IUser>("User", userSchema);
