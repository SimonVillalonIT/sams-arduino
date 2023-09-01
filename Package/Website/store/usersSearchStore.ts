import { insertNotification } from "@/utils/supabase";
import { create } from "zustand";

interface Store {
  searchedResults: UserTable[] | null;
  results: UserTable[] | null;
  searchedQuery: string;
  isSearching: boolean;
  invitedUsers: UserTable[];
}

interface Actions {
  setSearchedResults: (
    users: Database["public"]["Tables"]["users"]["Row"][] | null,
  ) => void;
  setResults: (
    users: Database["public"]["Tables"]["users"]["Row"][] | null,
  ) => void;
  setSearchedQuery: (search: string) => void;
  setIsSearching: (bool: boolean) => void;
  addInvitedUsers: (user: Database["public"]["Tables"]["users"]["Row"]) => void;
  filterInvitedUser: (id: string) => void;
  clearInvitedUsers: () => void;
  sendInvitation: (users: UserTable[], classroom: string) => void;
}

const useUserSearchStore = create<Store & Actions>()((set, get) => ({
  searchedResults: null,
  results: null,
  searchedQuery: "",
  isSearching: false,
  invitedUsers: [],
  setSearchedResults: (users) =>
    set((state) => ({ ...state, searchedResults: users })),
  setResults: (users) => set((state) => ({ ...state, results: users })),
  setSearchedQuery: (search) =>
    set((state) => ({ ...state, searchedQuery: search })),
  setIsSearching: (bool) => set((state) => ({ ...state, isSearching: bool })),
  addInvitedUsers: (user) =>
    set((state) => ({
      invitedUsers: [...state.invitedUsers, user],
    })),
  filterInvitedUser: (id) =>
    set((state) => ({
      invitedUsers: state.invitedUsers.filter((user) => user.id !== id),
    })),
  clearInvitedUsers: () => set((state) => ({ ...state, invitedUsers: [] })),
  sendInvitation: async (users, classroom) => {
    const error = await insertNotification(users, classroom);
    if (error) {
      return console.log(error);
    }
    get().clearInvitedUsers();
  },
}));

export default useUserSearchStore;
