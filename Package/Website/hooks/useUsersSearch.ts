import { useEffect, useCallback } from "react";
import debounce from "just-debounce-it";
import useUserSearchStore from "@/store/usersSearchStore";
import { fetchUsers } from "@/utils/supabase";

export interface PublicUser {
  id: string;
  email: string | null;
}

export default function useUsersSearch(query: string, classroomId: string) {
  const {
    invitedUsers,
    isSearching,
    results,
    searchedQuery,
    searchedResults,
    addInvitedUsers,
    setIsSearching,
    setResults,
    setSearchedQuery,
    setSearchedResults,
  } = useUserSearchStore();

  const getResults = useCallback(
    debounce((q: string) => {
      setSearchedQuery(q);
      setIsSearching(true);
      fetchUsers(q, classroomId).then((data) => {
        if (data) setSearchedResults(data);
        else console.log("¡Hubo un error al buscar personas!");
        setIsSearching(false);
      });
    }, 200),
    [],
  );

  useEffect(() => {
    if (!query) {
      if (results) setResults(null);
      return;
    }
    if (isSearching && searchedQuery === query) return;
    getResults(query);
  }, [query]);

  useEffect(() => {
    if (!searchedResults) return;

    if (query) setResults(searchedResults);
  }, [searchedResults]);

  return {
    results,
    getResults,
    isSearching,
    invitedUsers,
    addInvitedUsers,
  };
}
