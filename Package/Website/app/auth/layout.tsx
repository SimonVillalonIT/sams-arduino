"use client";
import { Footer, Header } from "@/components";
import Alert from "@/components/alert";
import useAlertStore from "store/alertStore";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { alert } = useAlertStore();
  return (
    <>
      <Header />
      {alert.message ? (
        <Alert type={alert.type} message={alert.message} />
      ) : null}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
