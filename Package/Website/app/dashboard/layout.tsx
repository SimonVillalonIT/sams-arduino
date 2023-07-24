"use client";
import IconLink from "@/components/dashboard/IconLink";
import { HiCalculator, HiAdjustments, HiHome } from "react-icons/hi";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <IconLink href="/dashboard" icon={HiHome} />
      <IconLink href="/dashboard/config" icon={HiAdjustments} />
      <IconLink href="/dashboard/devices" icon={HiCalculator} />
      {children}
    </div>
  );
}
