import { create } from "zustand";

export type AuthStore = {
  token: string;
  setToken: (token: string) => void;
};

export const useAuthStore = create<AuthStore>(
  (set): AuthStore => ({
    token: "",
    setToken: (token: string) => {
      set({ token });
    },
  }),
);
