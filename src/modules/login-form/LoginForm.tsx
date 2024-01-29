"use client";

import React, { memo } from "react";
import { Button, Input } from "~/components/ui";
import { LoginFormField } from "~/enums/LoginForm.enum";
import { useLoginForm } from "./LoginForm.action";
import { useTranslations } from "next-intl";
import Link from "next/link";

const LoginForm = () => {
  const { register, onSubmit } = useLoginForm();
  const t = useTranslations("loginPage");

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <h3 className="mb-10 scroll-m-20 text-center text-2xl font-semibold tracking-tight">
        {t("login")}
      </h3>
      <Input
        placeholder={t("email")}
        className="mb-4"
        {...register(LoginFormField.EMAIL)}
      />
      <Input
        type="password"
        placeholder={t("password")}
        className="mb-4"
        {...register(LoginFormField.PASSWORD)}
      />
      <Button type="submit" className="my-3">
        {t("submit")}
      </Button>
      <Button variant="link" className="my-3" asChild>
        <Link href={`/sign-up`}>{t("signUp")}</Link>
      </Button>
    </form>
  );
};

export default memo(LoginForm);
