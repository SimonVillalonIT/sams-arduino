"use client";
import Link from "next/link";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Sensors from "./sensors";

const device = ({
  data,
  showLink,
}: {
  data: ClassroomTable;
  showLink?: boolean;
}) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col items-center">
        <Sensors
          data={[
            { id: 1, value: data.sensor1 ?? 0 },
            { id: 2, value: data.sensor2 ?? 0 },
            { id: 3, value: data.sensor3 ?? 0 },
            { id: 4, value: data.sensor4 ?? 0 },
            { id: 5, value: data.sensor5 ?? 0 },
            { id: 6, value: data.sensor6 ?? 0 },
          ]}
        />
        <strong className="text-base-content mt-2">{data.classroom}</strong>
        {showLink ? (
          <Link href={`/dashboard/devices/${data.id}`}>Detalles</Link>
        ) : null}
      </div>
    </DndProvider>
  );
};

export default device;
