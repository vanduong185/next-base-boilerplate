import { useEffect, type BaseSyntheticEvent, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { type LoginFormModel, loginSchema } from "~/models/LoginForm.model";
import { useAuth } from "~/hooks/useAuth";

export const useLoginForm = () => {
  const { token, setToken } = useAuth();
  const { register, handleSubmit } = useForm<LoginFormModel>({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    console.log(token);
    setToken("token");
  }, [token, setToken]);

  const onSubmit = useCallback(
    async (event: BaseSyntheticEvent) => {
      await handleSubmit((data) => {
        console.log(data);
      })(event);
    },
    [handleSubmit],
  );

  return {
    register,
    onSubmit,
  };
};
