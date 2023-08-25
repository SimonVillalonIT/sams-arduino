import { deleteClassroom } from "@/utils/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Classroom } from "hooks/useClassrooms";
import { create } from "zustand";

interface Store {
  classrooms: Classroom[] | null;
}

interface Actions {
  setClassrooms: (c: Classroom[] | null) => void;
  deleteClassroom: (id: string) => void;
}

const supabase = createClientComponentClient<Database>();

const useClassroomStore = create<Store & Actions>((set) => ({
  classrooms: [],
  setClassrooms: (c) => set((state) => ({ ...state, classrooms: c })),
  deleteClassroom: async (id) => {
    await deleteClassroom(id);
    return set((state) =>
      state.classrooms
        ? { ...state, classrooms: state.classrooms.filter((c) => c.id !== id) }
        : { ...state, classroom: null },
    );
  },
}));

export default useClassroomStore;
