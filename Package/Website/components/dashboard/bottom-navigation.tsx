"use client";
import IconLink from "./icon-link";
import { HiCalculator, HiAdjustments, HiHome } from "react-icons/hi";

const BottomNavigation = () => (
  <nav className="btm-nav lg:hidden">
    <IconLink href="/dashboard/devices" icon={HiCalculator} />
    <IconLink href="/dashboard" icon={HiHome} />
    <IconLink href="/dashboard/config" icon={HiAdjustments} />
  </nav>
);

export default BottomNavigation;
