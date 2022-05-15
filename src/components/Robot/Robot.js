const Robot = ({
  robot,
  robot: { name, resiatnce, created, image, velocity },
}) => {
  return (
    <li data-testid="robot" className="robot">
      <h3 className="robot__name">{name}</h3>
      <img className="robot__image" src={image} alt={name} />
      <ul>
        <li>{resiatnce}</li>
        <li>{velocity}</li>
        <li>{created}</li>
      </ul>
    </li>
  );
};

export default Robot;
