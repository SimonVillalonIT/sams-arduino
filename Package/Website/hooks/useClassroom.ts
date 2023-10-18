"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { Classroom } from "./useClassrooms";

export default function useClassroom(id: string) {
  const [loading, setLoading] = useState(false);
  const [classroom, setClassroom] = useState<Classroom>({
    classroom: "",
    sensor1: 0,
    sensor2: 0,
    sensor3: 0,
    sensor4: 0,
    sensor5: 0,
    sensor6: 0,
    created_at: Date.now().toString(),
    id: "0",
    active: false,
  });

  const supabase = createClientComponentClient<Database>();

  const fetchClassroomData = async (id: string) => {
    const { data } = await supabase.from("device").select("*").eq("id", id);
    data ? setClassroom(data[0]) : null;
    console.log(data);
  };

  useEffect(() => {
    fetchClassroomData(id);
  }, [id]);

  useEffect(() => {
    const suscribeToSingleChanges = () => {
      const filter = `id=eq.${id}`;
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
            setClassroom(updatedDevice);
          },
        )
        .subscribe();

      return () => {
        channel.unsubscribe();
      };
    };
    suscribeToSingleChanges();
  }, [id]);

  useEffect(() => {
    setLoading(false);
  }, []);

  return { classroom, loading };
}
