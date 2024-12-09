const StarshipCard = ({ starship }) => {
  return (
    <div>
      <h4>
        <strong>Name: </strong>
        {starship.name}
      </h4>
      <p>
        <strong>Class:</strong> {starship.starship_class}
      </p>
      <p>
        <strong>Manufacturer:</strong> {starship.manufacturer}
      </p>
      <p>
        <strong>Model:</strong> {starship.model}
      </p>
    </div>
  );
};

export default StarshipCard;
