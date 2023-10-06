"use client";
import Classroom from "components/dashboard/classroom";
import useClassrooms from "hooks/useClassrooms";
import Link from "next/link";
import { HiPlusCircle } from "react-icons/hi";

export default function DashboardPage() {
  const { classrooms, loading } = useClassrooms();

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
    </>
  ) : (
    <span className="absolute top-1/3 left-1/2 loading loading-spinner loading-lg"></span>
  );
}
