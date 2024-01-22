import React, { type BaseSyntheticEvent } from "react";
import { pick } from "lodash";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { type AuthStore, useAuthStore } from "~/stores/Auth.store";
import { type LoginFormModel, loginSchema } from "~/models/LoginForm.model";

export const useLoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormModel>({
    resolver: yupResolver(loginSchema),
  });

  const { token, setToken } = useAuthStore((store: AuthStore) =>
    pick(store, ["token", "setToken"] as Array<keyof AuthStore>),
  );

  React.useEffect(() => {
    console.log(token);
    setToken("token");
  }, [token, setToken]);

  const onSubmit = async (event: BaseSyntheticEvent) => {
    await handleSubmit((data) => {
      console.log(data);
    })(event);
  };

  return {
    register,
    onSubmit,
  };
};
