import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState, useCallback } from "react";
import debounce from "just-debounce-it";

export interface PublicUser {
  id: string;
  email: string | null;
}

export default function useUsersSearch(query: string) {
  const supabase = createClientComponentClient<Database>();
  const [searchedResults, setSearchedResults] = useState<PublicUser[] | null>(
    null,
  );
  const [results, setResults] = useState<PublicUser[] | null>(null);
  const [searchedQuery, setSearchedQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const fetchUsers = async (text: string) => {
    const user = await supabase.auth.getUser();
    const { data } = await supabase!
      .from("users")
      .select("*")
      .neq("email", user.data.user?.email)
      .ilike("email", `${text}%`)
      .limit(4);
    return data;
  };

  const getResults = useCallback(
    debounce((q: string) => {
      setSearchedQuery(q);
      setIsSearching(true);

      fetchUsers(q).then((data) => {
        if (data) setSearchedResults(data);
        else console.log("¡Hubo un error al buscar personas!");

        setIsSearching(false);
      });
    }, 500),
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

  return { results, getResults };
}
