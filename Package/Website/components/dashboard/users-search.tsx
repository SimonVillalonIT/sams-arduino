import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

interface User {
  id: string;
  email: string;
}

const supabase = createClientComponentClient<Database>();

export default function UsersSearch({ text }: { text: string }) {
  const [users, setUsers] = useState<any>([]);
  const [from, setFrom] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await supabase!
        .from("public.users")
        .select("*")
        .contains("public.users", text)
        .range(from, from + 1)
        .limit(20);
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}
