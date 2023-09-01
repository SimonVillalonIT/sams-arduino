import { Navigation, BottomNavigation } from "components/dashboard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <BottomNavigation />
    </>
  );
}
