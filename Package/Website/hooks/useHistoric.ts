import { getAverages } from "@/utils/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export default function useHistoric(id: string) {
  const supabase = createClientComponentClient<Database>();
  const [data, setData] =
    useState<Database["public"]["Tables"]["history"]["Row"][]>();

  useEffect(() => {
    const fetchHistoric = async () => {
      const { data, error } = await supabase
        .from("history")
        .select()
        .eq("id_device", id);
      //.gt("updated_at", "2023-10-10 13:40:00");

      if (error) return;
      const formattedData =
        [] as Database["public"]["Tables"]["history"]["Row"][];
      if (data) {
        data.map((d) => {
          if (!d || !d.updated_at) return;
          formattedData.push({
            ...d,
            updated_at: new Intl.DateTimeFormat("es-AR", {
              dateStyle: "medium",
              timeStyle: "medium",
            }).format(new Date(d.updated_at)),
          });
        });
        setData(getAverages(formattedData));
      }
    };
    fetchHistoric();
  }, []);

  return { data };
}
