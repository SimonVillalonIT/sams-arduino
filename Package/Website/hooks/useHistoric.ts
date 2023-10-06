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

      if (error) return;
      const formattedData =
        [] as Database["public"]["Tables"]["history"]["Row"][];
      data?.map((d) =>
        d.updated_at
          ? formattedData.push({
              ...d,
              updated_at: new Intl.DateTimeFormat("es-AR", {
                dateStyle: "medium",
                timeStyle: "medium",
              }).format(new Date(d.updated_at)),
            })
          : null,
      );
      data ? setData(formattedData) : null;
    };
    fetchHistoric();
  }, []);

  return { data };
}
