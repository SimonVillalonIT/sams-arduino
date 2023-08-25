import useUserSearchStore from "@/store/usersSearchStore";

export default function UsersSearch() {
  const { results, isSearching, setResults, addInvitedUsers, invitedUsers } =
    useUserSearchStore();
  return isSearching ? (
    <p>Loading...</p>
  ) : (
    <ul className="menu w-full rounded-box">
      {results?.map((user: Database["public"]["Tables"]["users"]["Row"]) => (
        <li
          onClick={() => {
            if (invitedUsers.find((u) => u.id === user.id)) return null;
            addInvitedUsers(user);
            setResults([]);
          }}
          className="w-full "
          key={user.id}
        >
          <a>{user.email}</a>
        </li>
      ))}
    </ul>
  );
}
