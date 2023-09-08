"use client";
import useClassrooms from "@/hooks/useClassrooms";

const page = () => {
  const { classrooms } = useClassrooms();
  return (
    <>
      <h1 className="text-center">
        Aqui puedes controlar todos tus dispostivos
      </h1>
      <section className="flex justify-center flex-wrap gap-4 w-[90%] m-auto">
        {classrooms?.map((room) => (
          <div className="flex w-full max-w-lg justify-center h-96 flex-wrap bg-red-700">
            <div className="w-1/2 text-center">
              <h4>1:{room.sensor1}</h4>{" "}
            </div>
            <div className="w-1/2 text-center">
              <h4>2:{room.sensor2}</h4>
            </div>
            <div className="w-1/2 text-center">
              <h4>3:{room.sensor3}</h4>
            </div>
            <div className="w-1/2 text-center">
              <h4>4:{room.sensor4}</h4>
            </div>
            <div className="w-1/2 text-center">
              <h4>5:{room.sensor5}</h4>
            </div>
            <div className="w-1/2 text-center">
              <h4>6:{room.sensor6}</h4>
            </div>
            {room.classroom}
          </div>
        ))}
      </section>
    </>
  );
};

export default page;
