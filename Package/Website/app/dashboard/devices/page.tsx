"use client";
import useClassrooms from "@/hooks/useClassrooms";
import Sensors from "components/devices/sensors";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const page = () => {
  const { classrooms } = useClassrooms();
  return (
    <>
      <h1 className="text-center">
        Aqui puedes controlar todos tus dispostivos
      </h1>
      <section className="flex justify-center flex-wrap gap-4 w-[90%] m-auto">
        {classrooms.map((c) => (
          <DndProvider backend={HTML5Backend}>
            <Sensors
              data={[
                c.sensor1 ? { id: 1, value: c.sensor1 } : { id: 1, value: 0 },
                c.sensor2 ? { id: 2, value: c.sensor2 } : { id: 2, value: 0 },
                c.sensor3 ? { id: 3, value: c.sensor3 } : { id: 3, value: 0 },
                c.sensor4 ? { id: 4, value: c.sensor4 } : { id: 4, value: 0 },
                c.sensor5 ? { id: 5, value: c.sensor5 } : { id: 5, value: 0 },
                c.sensor6 ? { id: 6, value: c.sensor6 } : { id: 6, value: 0 },
              ]}
            />
          </DndProvider>
        ))}
      </section>
    </>
  );
};

export default page;
