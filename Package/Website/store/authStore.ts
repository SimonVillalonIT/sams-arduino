import { create } from "zustand";

interface Store {
  toggle: boolean;
}

interface Actions {
  setToggle: () => void;
}

const useAuthStore = create<Store & Actions>((set) => ({
  toggle: false,
  setToggle: () => set((state) => ({ toggle: !state.toggle })),
}));

export default useAuthStore;
