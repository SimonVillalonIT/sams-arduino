import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "emerald" | "night";

interface Store {
  theme: Theme;
}

interface Actions {
  setTheme: (value: Theme) => void;
}

const useThemeStore = create<Store & Actions>()(
  persist(
    (set) => ({
      theme: "emerald",
      setTheme: (value) => set(() => ({ theme: value })),
    }),
    {
      name: "theme-storage",
    },
  ),
);

export default useThemeStore;
