import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
export const getUserId = async () => {
  const supabase = createClientComponentClient();
  const user = await supabase.auth.getUser();
  const id = user.data.user?.id as string;
  return id;
};
