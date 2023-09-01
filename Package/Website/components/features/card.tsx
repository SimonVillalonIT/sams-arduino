import { IconType } from "react-icons";

interface CardInterface {
  title: string;
  text: string;
  icon: IconType;
}

function Card({ icon: Icon, title, text }: CardInterface) {
  return (
    <div className="card m-4 h-72 w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <Icon className="rounded-xl text-7xl text-primary" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;
