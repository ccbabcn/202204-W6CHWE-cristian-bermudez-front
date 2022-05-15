import { useSelector } from "react-redux";
import Robot from "../Robot/Robot";
import { RobotListStyle } from "./RobotListStyle";

const RobotsList = () => {
  const robots = useSelector((state) => state.robots);
  return (
    <RobotListStyle className="container">
      <ul className="robots-container container">
        {robots.map((robot) => (
          <Robot key={robot._id} robot={robot} />
        ))}
      </ul>
    </RobotListStyle>
  );
};

export default RobotsList;
