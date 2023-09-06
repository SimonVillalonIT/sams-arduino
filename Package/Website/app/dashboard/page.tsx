"use client";
import Classroom from "components/dashboard/classroom";
import useClassrooms from "hooks/useClassrooms";
import Link from "next/link";
import { HiPlusCircle } from "react-icons/hi";
import { AreaChart } from "@tremor/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const { classrooms, loading } = useClassrooms();
  const supabase = createClientComponentClient<Database>();
  const [data, setData] =
    useState<Database["public"]["Tables"]["history"]["Row"][]>();

  useEffect(() => {
    const fetchHistoric = async () => {
      const { data, error } = await supabase.from("history").select();
      console.log(data);
      data ? setData(data) : null;
    };
    fetchHistoric();
  }, []);

  const dataFormatter = (number: number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };

  return !loading ? (
    <>
      {classrooms?.length === 0 ? (
        <p className="text-center">
          No se detecta ningun dispositivo encendido, puedes crear uno nuevo
          abajo
        </p>
      ) : null}
      <section className="p-8 flex gap-4">
        {classrooms?.map((classroom) => (
          <Classroom key={classroom.id} {...classroom} />
        ))}
        <div className="h-72 w-56 shadow-black/10 shadow-xl flex flex-col items-center justify-center">
          <Link href="/dashboard/devices/create">
            <HiPlusCircle className="text-4xl" />
          </Link>
        </div>
      </section>
      <section>
        {data ? (
          <AreaChart
            className="h-72 mt-4"
            data={data}
            index="updated_at"
            categories={[
              "sensor1",
              "sensor2",
              "sensor3",
              "sensor4",
              "sensor5",
              "sensor6",
            ]}
            colors={["indigo", "cyan"]}
            valueFormatter={dataFormatter}
          />
        ) : null}
      </section>
    </>
  ) : (
    <span className="absolute top-1/3 left-1/2 loading loading-spinner loading-lg"></span>
  );
}
