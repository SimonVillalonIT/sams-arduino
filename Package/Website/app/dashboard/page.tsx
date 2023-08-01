"use client";
import Classroom from "components/dashboard/classroom";
import useClassrooms from "hooks/useClassrooms";
import Link from "next/link";
import { HiPlusCircle } from "react-icons/hi";

export default function DashboardPage() {
  const { classrooms } = useClassrooms();

  return classrooms ? (
    <>
      {classrooms.length === 0 ? (
        <p className="text-center">
          No se detecta ningun dispositivo encendido, puedes crear uno nuevo
          abajo
        </p>
      ) : null}
      <section className="p-8 flex gap-4">
        {classrooms.map((classroom) => (
          <Classroom {...classroom} />
        ))}
        <div className="h-72 w-56 shadow-black/10 shadow-xl flex flex-col items-center justify-center">
          <Link href="/dashboard/devices/create">
            <HiPlusCircle className="text-4xl" />
          </Link>
        </div>
      </section>
    </>
  ) : (
    <p>Loading classrooms...</p>
  );
}
