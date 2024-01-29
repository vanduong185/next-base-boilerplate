import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "~/components/ui";

export default function SignUpPage() {
  const t = useTranslations("signUpPage");
  return (
    <main className="flex flex-col items-center justify-center p-10">
      <h3 className="mb-10 scroll-m-20 text-center text-2xl font-semibold tracking-tight">
        {t("signUp")}
      </h3>
      <Button asChild variant="link">
        <Link href="/">{t('goToLogin')}</Link>
      </Button>
    </main>
  );
}
