import { deleteItemAsync, getItem, setItemAsync } from "expo-secure-store";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserState = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

const useAuthStore = create(
  persist<UserState>(
    (set) => ({
      isLoggedIn: false,
      login: () =>
        set(() => ({
          isLoggedIn: true,
        })),
      logout: () =>
        set(() => ({
          isLoggedIn: false,
        })),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => ({
        setItem: setItemAsync,
        getItem,
        removeItem: deleteItemAsync,
      })),
    }
  )
);

export default useAuthStore;
