import { Field } from "formik";

export interface InputProps {
  name: string;
  text: string;
  type?: string;
  error: string | undefined;
}

const Input = ({ name, text, type, error }: InputProps) => {
  return (
    <div>
      <label className="label text-base label-text">
        <span className="">{text}</span>
      </label>
      <div
        className={
          error ? "tooltip tooltip-open tooltip-error w-full" : "w-full"
        }
        data-tip={error}
      >
        <Field
          id={name}
          name={name}
          type={type ? type : "text"}
          placeholder={text}
          className="w-full input input-bordered"
        />
      </div>
    </div>
  );
};

export default Input;
