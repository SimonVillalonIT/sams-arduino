"use client";
import Graph from "@/components/devices/graph";
import Device from "@/components/devices/device";
import useClassrooms from "@/hooks/useClassrooms";
const page = ({ params }: { params: { id: string } }) => {
  const {classrooms} = useClassrooms()
  const classroom = classrooms.filter(c => c.id === params.id)
  return (
    <div>
      <Device data={classroom[0]} />
      <Graph id={params.id} />
    </div>
  );
};

export default page;
