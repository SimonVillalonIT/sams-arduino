import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "corporate" | "night";

interface Store {
  theme: Theme;
}

interface Actions {
  setTheme: (value: Theme) => void;
  toggleTheme: () => void;
}

const useThemeStore = create<Store & Actions>()(
  persist(
    (set, get) => ({
      theme: "corporate",
      setTheme: (value) => set(() => ({ theme: value })),
      toggleTheme: () =>
        get().theme === "corporate"
          ? get().setTheme("night")
          : get().setTheme("corporate"),
    }),
    {
      name: "theme-storage",
    },
  ),
);

export default useThemeStore;
