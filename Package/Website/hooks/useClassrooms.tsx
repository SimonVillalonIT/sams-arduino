import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { getUserId } from "@/utils/supabase";

export interface Classroom {
  idDevice: string;
  classroom: string;
  sensor1: string;
  sensor2: string;
  sensor3: string;
  sensor4: string;
  sensor5: string;
  sensor6: string;
  created_at: string;
}

export default function useClassrooms() {
  const supabase = createClientComponentClient<Database>();
  const [ids, setIds] = useState<string[] | undefined>([]);
  const [classrooms, setClassrooms] = useState<Classroom[] | undefined>([]);

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
          console.log(updatedDevice);
          if (typeof updatedDevice === "object") setClassrooms([updatedDevice]);
          if (typeof updatedDevice !== "object") {
            setClassrooms([updatedDevice]);
          }
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
      const updatedIds = data?.map(
        (device: { device_id: string }) => device.device_id,
      );
      setIds(updatedIds);
    } catch (error) {
      console.log(error);
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
  };
}
