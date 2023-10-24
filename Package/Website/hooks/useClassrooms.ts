import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { getUserId } from "@/utils/supabase";
import useClassroomStore from "@/store/classroomStore";

export default function useClassrooms() {
    const supabase = createClientComponentClient<Database>();
    const { classrooms, setClassrooms } = useClassroomStore();
    const [ids, setIds] = useState<string[] | []>([]);
    const [loading, setLoading] = useState(true);

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
                    const updatedDevice = payload.new as ClassroomTable;
                    const oldClassrooms = classrooms?.filter(
                        (c) => c.id !== updatedDevice.id,
                    );
                    setClassrooms([
                        ...(oldClassrooms as []),
                        { ...updatedDevice, active: true },
                    ]);
                    setTimeout(() => {
                        const updatedClassrooms = classrooms.map((c) =>
                            c.id === updatedDevice.id ? { ...c, active: false } : c
                        );
                        setClassrooms(updatedClassrooms);
                    }, 10000); // 10000 milisegundos = 10 segundos
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
        } else {
            const devices= data as unknown as ClassroomTable[];
            devices
                ? setClassrooms(devices.map((c) => ({ ...c, active: false })))
                : null;
            setIds(devices ? devices.map((c) => c.id) : []);
        }
    };

    useEffect(() => {
        fetchData();
        setLoading(false)
    }, []);

    useEffect(() => {
        suscribeToChanges();
    }, [ids]);

    return {
        classrooms,
        loading,
    };
}
