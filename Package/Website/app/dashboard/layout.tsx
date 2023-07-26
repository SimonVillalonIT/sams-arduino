import { Navigation, BottomNavigation } from "components/dashboard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navigation />
      {children}
      <BottomNavigation />
    </div>
  );
}
