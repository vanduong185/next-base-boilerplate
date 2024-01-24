import { useMemo } from "react";
import { pick } from "lodash";
import { type AuthStore, useAuthStore } from "~/stores/Auth.store";

export const useAuth = () => {
  const { token, setToken } = useAuthStore((store: AuthStore) =>
    pick(store, ["token", "setToken"] as Array<keyof AuthStore>),
  );
  return useMemo(() => ({ token, setToken }), [token, setToken]);
};
