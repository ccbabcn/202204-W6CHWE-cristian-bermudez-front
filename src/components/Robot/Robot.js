import { RobotStyle } from "./RobotStyle";

const Robot = ({
  robot,
  robot: { name, resistance, created, image, velocity },
}) => {
  return (
    <RobotStyle>
      <div data-testid="robot" className="robot">
        <h3 className="robot__name">{name}</h3>
        <img
          height={300}
          className="robot__image rounded"
          src={image}
          alt={name}
        />
        <ul>
          <li>Resistance: {resistance}</li>
          <li>Velocity: {velocity}</li>
          <li>Date ofcreation {created}</li>
        </ul>
      </div>
    </RobotStyle>
  );
};

export default Robot;
