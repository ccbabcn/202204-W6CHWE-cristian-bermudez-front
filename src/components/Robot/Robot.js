import PropTypes from "prop-types";
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

Robot.propTypes = {
  robot: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resistance: PropTypes.number.isRequired,
    created: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    velocity: PropTypes.number.isRequired,
  }).isRequired,
};

export default Robot;
