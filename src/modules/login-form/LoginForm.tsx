"use client";

import React, { memo } from "react";
import { Button, Input } from "~/components/ui";
import { LoginFormField } from "~/enums/LoginForm.enum";
import { useLoginForm } from "./LoginForm.action";

const LoginForm = () => {
  const { register, onSubmit } = useLoginForm();

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <h3 className="mb-10 scroll-m-20 text-center text-2xl font-semibold tracking-tight">
        Login
      </h3>
      <Input
        placeholder="Email"
        className="mb-4"
        {...register(LoginFormField.EMAIL)}
      />
      <Input
        type="password"
        placeholder="Password"
        className="mb-4"
        {...register(LoginFormField.PASSWORD)}
      />
      <Button type="submit" className="my-3">
        Submit
      </Button>
    </form>
  );
};

export default memo(LoginForm);
