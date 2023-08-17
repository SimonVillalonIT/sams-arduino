import { PublicUser } from "@/hooks/useUsersSearch";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { HiPaperAirplane } from "react-icons/hi";

export default function UsersSearch({
  results,
  idClassroom,
}: {
  results: PublicUser[] | null;
  idClassroom: string;
}) {
  const supabase = createClientComponentClient<Database>();
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
    <ul className="px-2 ">
      {results?.map((user: Database["public"]["Tables"]["users"]["Row"]) => (
        <li
          className="flex items-center justify-between py-2 border-b border-neutral-focus"
          key={user.id}
        >
          <p>{user.email}</p>
          <HiPaperAirplane
            onClick={() =>
              sendInvitation({
                "accepted?": false,
                id_device: idClassroom,
                id_user: user.id,
              })
            }
            className="rotate-90 text-accent text-xl"
          />
        </li>
      ))}
    </ul>
  );
}
