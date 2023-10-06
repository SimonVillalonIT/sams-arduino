"use client";

import { useState, useEffect } from "react";
import useClassroomStore from "@/store/classroomStore";
import {
  fetchClassroomsData,
  suscribeToMultipleChanges,
} from "@/utils/supabase";

export interface Classroom extends ClassroomTable {
  active?: boolean;
}
export default function useClassrooms() {
  const [loading, setLoading] = useState(true);

  const { classrooms, setClassrooms } = useClassroomStore();
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    fetchClassroomsData(setLoading, setClassrooms, setIds);
  }, []);

  useEffect(() => {
    suscribeToMultipleChanges(ids, classrooms, setClassrooms);
  }, [ids]);

  useEffect(() => {
    setLoading(false);
  }, []);

  return {
    classrooms,
    loading,
  };
}
