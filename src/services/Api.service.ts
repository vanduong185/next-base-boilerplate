import ky from "ky";
import { env } from "~/env";

export const api = ky.create({ prefixUrl: env.NEXT_SERVER_URL });
