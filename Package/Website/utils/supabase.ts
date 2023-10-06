import { Classroom } from "@/hooks/useClassrooms";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Dispatch, SetStateAction } from "react";

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

export const fetchUsers = async (text: string, classroomId: string) => {
  const { data } = await supabase.rpc("fetch_users", {
    text_value: text,
    classroom_id: classroomId,
  });
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

export const suscribeToSingleChanges = (
  id: string,
  setClassroom: (c: Classroom) => void,
) => {
  const filter = `id=${id}`;
  const channel = supabase
    .channel("schema-db-changes")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "device",
        filter,
      },
      (payload) => {
        const updatedDevice = payload.new as ClassroomTable;
        setClassroom(updatedDevice);
      },
    )
    .subscribe();

  return () => {
    channel.unsubscribe();
  };
};

export const suscribeToMultipleChanges = (
  ids: string[],
  classrooms: Classroom[],
  setClassrooms: (c: Classroom[]) => void,
) => {
  if (ids?.length === 0) return;
  const filter = `id=in.(${ids?.join(",")})`;
  const channel = supabase
    .channel("schema-db-changes")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "device",
        filter,
      },
      (payload) => {
        const updatedDevice = payload.new as ClassroomTable;
        const oldClassrooms = classrooms?.filter(
          (c) => c.id !== updatedDevice.id,
        );
        setClassrooms([
          ...(oldClassrooms as []),
          { ...updatedDevice, active: true },
        ]);
      },
    )
    .subscribe();

  return () => {
    channel.unsubscribe();
  };
};

export const fetchClassroomData = async (
  id: string,
  setClassroom: (c: Classroom) => void,
) => {
  const { data } = await supabase.from("device").select("*").eq("id", id);
  data ? setClassroom(data[0]) : null;
};

export const fetchClassroomsData = async (
  setLoading: Dispatch<SetStateAction<boolean>>,
  setClassrooms: (c: Classroom[]) => void,
  setIds: Dispatch<SetStateAction<string[]>>,
) => {
  const userId = (await getUserId()) as string;
  const { data, error } = await supabase.rpc("get_devices_by_user_id", {
    id_user: userId,
  });
  if (error) {
    console.error(error);
    setLoading(false);
  } else {
    const devices: Classroom[] = data as unknown as Classroom[];
    if (devices) setClassrooms(devices.map((c) => ({ ...c, active: false })));
    else return null;
    setIds(devices ? devices.map((c) => c.id) : []);
    setLoading(false);
  }
};
