import useUserSearchStore from "@/store/usersSearchStore";

export default function UsersSearch() {
  const { results, isSearching, setResults, addInvitedUsers, invitedUsers } =
    useUserSearchStore();
  return isSearching ? (
    <span className="loading loading-dots loading-md"></span>
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
          <a
            className={
              invitedUsers.find((u) => u.id === user.id) ? "active" : ""
            }
          >
            {user.email}
          </a>
        </li>
      ))}
    </ul>
  );
}
