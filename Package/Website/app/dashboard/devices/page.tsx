"use client";
import Device from "@/components/devices/device";
import useClassrooms from "@/hooks/useClassrooms";

const page = () => {
  const { classrooms } = useClassrooms();
  return (
    <section>
      <h1 className="text-center font-bold mb-4">
        Aquí puedes controlar todos tus dispostivos
      </h1>
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-4 w-fit m-auto">
          {classrooms?.map((c:ClassroomTable) => <Device showLink={true} data={c} />)}
        </div>
      </div>
    </section>
  );
};

export default page;
