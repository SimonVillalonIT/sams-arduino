import { PropsWithChildren } from "react";

interface FormContainerProps {
  title: string;
  text: string;
}

const FormContainer = ({
  title,
  text,
  children,
}: PropsWithChildren<FormContainerProps>) => (
  <div className="w-full h-[560px] p-6 rounded-md ring-2 ring-neutral/5 shadow-xl sm:max-w-lg">
    <h1 className="text-3xl font-semibold text-center">{title}</h1>
    <p className="text-center font-light">{text}</p>
    {children}
  </div>
);

export default FormContainer;
