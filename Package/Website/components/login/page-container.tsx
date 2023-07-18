import { PropsWithChildren } from "react";

const PageContainer = ({ children }: PropsWithChildren) => (
  <main className="flex justify-evenly items-center pb-16">{children}</main>
);

export default PageContainer;
