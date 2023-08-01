import { Classroom } from "hooks/useClassrooms";
import { HiThumbDown } from "react-icons/hi";

const Classroom = ({
  classroom,
  sensor1,
  sensor2,
  sensor3,
  sensor4,
  sensor5,
  sensor6,
  active,
}: Classroom) => {
  const levels = [
    sensor1 ? sensor1 : 0,
    sensor2 ? sensor2 : 0,
    sensor3 ? sensor3 : 0,
    sensor4 ? sensor4 : 0,
    sensor5 ? sensor5 : 0,
    sensor6 ? sensor6 : 0,
  ];
  const highest = Math.max(...levels);
  return (
    <div className="h-72 w-64 shadow-black/10 shadow-xl flex flex-col items-center justify-around">
      {active ? (
        <>
          <p className="text-2xl">{highest}</p>
          <HiThumbDown className="text-3xl text-red-800" />
          <h1 className="text-2xl">{classroom}</h1>
        </>
      ) : (
        "Apagado"
      )}
    </div>
  );
};

export default Classroom;
