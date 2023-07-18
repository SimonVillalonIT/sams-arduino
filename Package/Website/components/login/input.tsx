interface InputProps {
  name: string;
  text: string,
  type?: string;
}

const Input = ({ name,text, type }: InputProps) => (
  <div>
    <label className="label">
      <span className="text-base label-text">{text}</span>
    </label>
    <input
      name={name}
      type={type ? type : "text"}
      placeholder={text}
      className="w-full input input-bordered"
    />
  </div>
);

export default Input;
