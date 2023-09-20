import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { getUserId } from "@/utils/supabase";
import useClassroomStore from "@/store/classroomStore";

export interface Classroom extends ClassroomTable {
  active?: boolean;
}

export default function useClassrooms() {
  const supabase = createClientComponentClient<Database>();
  //const { classrooms, setClassrooms } = useClassroomStore();
  const [ids, setIds] = useState<string[] | []>([]);
  const [loading, setLoading] = useState(true);

  /*const suscribeToChanges = () => {
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
    const userId = (await getUserId()) as string;
    const { data, error } = await supabase.rpc("get_devices_by_user_id", {
      id_user: userId,
    });
    if (error) {
      console.error(error);
      setLoading(false);
    } else {
      const devices: Classroom[] = data as unknown as Classroom[];
      setClassrooms(
        devices ? devices.map((c) => ({ ...c, active: false })) : null,
      );
      setIds(devices ? devices.map((c) => c.id) : []);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    suscribeToChanges();
  }, [ids]);
*/

  const classrooms: ClassroomTable[] = [
    {
      classroom: "Matematica",
      id: "2",
      created_at: "2004-03-26",
      sensor1: 45,
      sensor2: 89,
      sensor3: 90,
      sensor4: 91,
      sensor5: 92,
      sensor6: 93,
    },
    {
      classroom: "Lengua",
      id: "3",
      created_at: "2004-03-22",
      sensor1: 45,
      sensor2: 45,
      sensor3: 45,
      sensor4: 45,
      sensor5: 45,
      sensor6: 45,
    },
    {
      classroom: "Programación",
      id: "4",
      created_at: "2004-03-23",
      sensor1: 3,
      sensor2: 3,
      sensor3: 3,
      sensor4: 3,
      sensor5: 3,
      sensor6: 3,
    },
  ];
  useEffect(() => {
    setLoading(false);
  });
  return {
    classrooms,
    //setClassrooms,
    loading,
  };
}
