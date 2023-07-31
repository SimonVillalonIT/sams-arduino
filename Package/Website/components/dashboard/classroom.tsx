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
}: Classroom) => {
  const levels = [sensor1, sensor2, sensor3, sensor4, sensor5, sensor6];
  const highest = levels.reduce((a, b) => (a > b ? a : b));
  return (
    <div className="h-72 w-64 shadow-black/10 shadow-xl flex flex-col items-center justify-around">
      <p className="text-2xl">{highest}</p>
      <HiThumbDown className="text-3xl text-red-800" />
      <h1 className="text-2xl">{classroom}</h1>
    </div>
  );
};

export default Classroom;
