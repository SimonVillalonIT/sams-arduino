"use client";
import useHistoric from "@/hooks/useHistoric";
import { AreaChart } from "@tremor/react";

const graph = ({ id }: { id: string }) => {
  const dataFormatter = (number: number) => {
    return Intl.NumberFormat("us").format(number).toString() + "db";
  };
  const { data } = useHistoric(id);
  return (
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
          colors={["rose", "pink", "indigo", "sky", "emerald", "amber"]}
          valueFormatter={dataFormatter}
        />
      ) : null}
    </section>
  );
};

export default graph;
