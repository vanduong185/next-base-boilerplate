import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "vi", "ja"];
export const defaultLocale = "en";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    messages: (await import(`~/locales/${locale}.json`)).default,
    timeZone: 'Asia/Ho_Chi_Minh'
  };
});
