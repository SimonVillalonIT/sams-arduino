import { create } from "zustand";

interface Store {
  searchedResults: Database["public"]["Tables"]["users"]["Row"][] | null;
  results: Database["public"]["Tables"]["users"]["Row"][] | null;
  searchedQuery: string;
  isSearching: boolean;
  invitedUsers: Database["public"]["Tables"]["users"]["Row"][] | [];
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
  setInvitedUsers: (user: Database["public"]["Tables"]["users"]["Row"]) => void;
  filterInvitedUser: (id: string) => void;
}

const useUserSearchStore = create<Store & Actions>()((set) => ({
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
  setInvitedUsers: (user) =>
    set((state) => ({
      invitedUsers: [...state.invitedUsers, user],
    })),
  filterInvitedUser: (id) =>
    set((state) => ({
      invitedUsers: state.invitedUsers.filter((user) => user.id !== id),
    })),
}));

export default useUserSearchStore;
