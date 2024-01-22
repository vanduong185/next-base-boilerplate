import { type LoginFormModel } from "~/models/LoginForm.model";
import { api } from "./Api.service";

export const login = (data: LoginFormModel) => {
  return api
    .post("/login", {
      json: data,
    })
    .json();
};
