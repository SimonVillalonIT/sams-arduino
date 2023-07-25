import { create } from "zustand";

export type AlertType = "warning" | "error" | "success" | "info"

export type Alert = {
  message: null | string;
  type?: AlertType;
};

interface Store {
  alert: Alert;
}

interface Actions {
  setAlert: (alert: Alert) => void;
}

const useAlertStore = create<Store & Actions>((set) => ({
  alert: { message: null  },
  setAlert: (alert) => set({ alert }),
}));

export default useAlertStore;
