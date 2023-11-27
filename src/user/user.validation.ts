import Joi from "joi";
import { UserModel } from "./user.model";

const JoiValidationSchema = Joi.object({
  userId: Joi.number().required().external(async (value) => {
    if (await UserModel.isFound(value)) {
      throw new Error('userId must be unique');
    }
    return value;
  }),
  username: Joi.string().required().external(async (value) => {
    if (await UserModel.isFoundByName(value)) {
      throw new Error('This username has been taken.');
    }
    return value;
  }),
  password: Joi.string().required(),
  fullName: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }).required(),
  age: Joi.number().required(),
  email: Joi.string().email().required(),
  isActive: Joi.boolean().required(),
  hobbies: Joi.array().items(Joi.string()).required(),
  address: Joi.object({
    street: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
  }).required(),
  orders: Joi.array().items(
    Joi.object({
      productName: Joi.string().required(),
      price: Joi.number().required(),
      quantity: Joi.number().required(),
    })
  ),
})
export default JoiValidationSchema;
