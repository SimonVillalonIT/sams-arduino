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
