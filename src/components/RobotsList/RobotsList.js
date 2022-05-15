import { useSelector } from "react-redux";
import Robot from "../Robot/Robot";

const RobotsList = () => {
  const robots = useSelector((state) => state.robots);
  return (
    <ul>
      {robots.map((robot) => (
        <Robot key={robot._id} robot={robot} />
      ))}
    </ul>
  );
};

export default RobotsList;
