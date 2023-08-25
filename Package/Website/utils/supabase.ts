import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient<Database>();

export const getUserId = async () => {
  const user = await supabase.auth.getUser();
  const id = user.data.user?.id as string;
  return id;
};

export const deleteClassroom = async (id: string) => {
  try {
    const { error } = await supabase.from("device").delete().eq("id", id);
    console.log(error);
  } catch (e) {
    console.log(e);
  }
};

export const fetchUsers = async (text: string) => {
  const user = await supabase.auth.getUser();
  const { data } = await supabase!
    .from("users")
    .select("*")
    .neq("email", user.data.user?.email)
    .ilike("email", `${text}%`)
    .limit(4);
  return data;
};

export const insertNotification = async (
  users: UserTable[],
  classroom: string,
) => {
  for (let user of users) {
    const { error } = await supabase
      .from("notification")
      .insert({ id_user: user.id, id_device: classroom });
    return error;
  }
};
