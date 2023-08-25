import useUserSearchStore from "@/store/usersSearchStore";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function UsersSearch() {
  const supabase = createClientComponentClient<Database>();
  const { results, setInvitedUsers, invitedUsers } = useUserSearchStore();
  const sendInvitation = async (
    data: Database["public"]["Tables"]["notification"]["Insert"],
  ) => {
    try {
      const { error, status } = await supabase
        .from("notification")
        .insert(data);
      console.log({ error, status });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul className="menu w-full rounded-box">
      {results?.map((user: Database["public"]["Tables"]["users"]["Row"]) => (
        <li
          onClick={() =>
            invitedUsers.find((u) => u.id === user.id)
              ? null
              : setInvitedUsers(user)
          }
          className="w-full "
          key={user.id}
        >
          <a>{user.email}</a>
        </li>
      ))}
    </ul>
  );
}
