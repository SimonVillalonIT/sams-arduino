import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { getUserId } from "@/utils/supabase";

export interface Classroom {
  id: string;
  created_at: string;
  classroom: string;
  sensor1: number | null;
  sensor2: number | null;
  sensor3: number | null;
  sensor4: number | null;
  sensor5: number | null;
  sensor6: number | null;
  active: boolean;
}

export default function useClassrooms() {
  const supabase = createClientComponentClient<Database>();
  const [classrooms, setClassrooms] = useState<Classroom[] | null>([]);
  const [ids, setIds] = useState<string[] | []>([]);

  const suscribeToChanges = () => {
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
          const updatedDevice = payload.new as Classroom;
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

  const fetchData = async () => {
    try {
      const userId = (await getUserId()) as string;
      const { data } = await supabase.rpc("get_devices_by_user_id", {
        id_user: userId,
      });
      setClassrooms(data ? data.map((c) => ({ ...c, active: false })) : null);
      setIds(data ? data.map((c) => c.id) : []);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteClassroom = async (id: string) => {
    try {
      await supabase.from("device").delete().eq("id", id);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    suscribeToChanges();
  }, [ids]);

  return {
    ids,
    setIds,
    classrooms,
    setClassrooms,
    deleteClassroom,
  };
}
