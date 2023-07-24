"use client";
import { usePathname } from "next/navigation";
import { HiAdjustments, HiCalculator } from "react-icons/hi";

export default function DashboardPage() {
  const path = usePathname();
  return <h1>DashboardPage</h1>;
}
