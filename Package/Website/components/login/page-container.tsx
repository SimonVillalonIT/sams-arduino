import { PropsWithChildren } from "react";

const PageContainer = ({ children }: PropsWithChildren) => {
  return (
    <main className="pb-16">
      <div className="flex justify-evenly items-center ">{children}</div>
    </main>
  );
};

export default PageContainer;
