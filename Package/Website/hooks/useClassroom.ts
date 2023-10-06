"use client";

import { fetchClassroomData, suscribeToSingleChanges } from "@/utils/supabase";
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

  useEffect(() => {
    fetchClassroomData(id, setClassroom);
  }, [id]);

  useEffect(() => {
    suscribeToSingleChanges(id, setClassroom);
  }, [id]);

  useEffect(() => {
    setLoading(false);
  }, []);

  return { classroom, loading };
}
