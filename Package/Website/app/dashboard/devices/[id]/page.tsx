"use client";
import Graph from "@/components/devices/graph";
import Device from "@/components/devices/device";
import useClassroom from "@/hooks/useClassroom";

const page = ({ params }: { params: { id: string } }) => {
  const { classroom } = useClassroom(params.id);
  return (
    <div>
      <Device data={classroom} />
      <Graph id={params.id} />
    </div>
  );
};

export default page;
