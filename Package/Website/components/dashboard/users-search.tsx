import { PublicUser } from "@/hooks/useUsersSearch";

export default function UsersSearch({
  results,
}: {
  results: PublicUser[] | null;
}) {
  return (
    <div>
      <ul>
        {results?.map((user: any) => <li key={user.id}>{user.email}</li>)}
      </ul>
    </div>
  );
}
