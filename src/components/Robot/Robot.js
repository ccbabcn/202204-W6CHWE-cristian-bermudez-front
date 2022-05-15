const Robot = ({
  robot,
  robot: { name, resistance, created, image, velocity },
}) => {
  return (
    <li data-testid="robot" className="robot">
      <h3 className="robot__name">{name}</h3>
      <img className="robot__image" src={image} alt={name} />
      <ul>
        <li>Resistance: {resistance}</li>
        <li>Velocity: {velocity}</li>
        <li>Date ofcreation {created}</li>
      </ul>
    </li>
  );
};

export default Robot;
