import { RobotStyle } from "./RobotStyle";

const Robot = ({
  robot,
  robot: { name, resistance, created, image, velocity },
}) => {
  return (
    <RobotStyle className="container">
      <div data-testid="robot" className="robot card text-center">
        <img
          width={286}
          height={150}
          className="robot__image card-img-top"
          src={image}
          alt={name}
        />
        <div className="card-body">
          <h3 className="robot__name Card title">{name}</h3>
          <ul className="list-group">
            <li className="list-group-item">Resistance: {resistance}</li>
            <li className="list-group-item">Velocity: {velocity}</li>
            <li className="list-group-item">Date ofcreation: {created}</li>
          </ul>
        </div>
      </div>
    </RobotStyle>
  );
};

export default Robot;
