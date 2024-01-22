import { object, string } from "yup";
import {
  MSG_INVALID_EMAIL,
  MSG_REQUIRED_EMAIL,
  MSG_REQUIRED_PASSWORD,
} from "~/constants/LoginForm.constant";

export type LoginFormModel = {
  email: string;
  password: string;
};

export const loginSchema = object().shape({
  email: string().email(MSG_INVALID_EMAIL).required(MSG_REQUIRED_EMAIL),
  password: string().required(MSG_REQUIRED_PASSWORD),
});
