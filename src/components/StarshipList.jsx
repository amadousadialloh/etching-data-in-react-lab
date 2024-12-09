import StarshipCard from "./StarshipCard";

const StarshipList = ({ starships, searchquery }) => {
  if (!Array.isArray(starships)) {
    console.error("Starships is not an array:", starships);
    return <p>Error loading starships</p>;
  }

  const starshipSearch = starships.filter((starship) =>
    starship.name.toLowerCase().includes(searchquery.toLowerCase())
  );

  return (
    <>
      <h3>Starship List</h3>
      <p>Results: {starshipSearch.length}</p>

      {starshipSearch.length > 0 ? (
        starshipSearch.map((starship, index) => (
          <StarshipCard key={index} starship={starship} />
        ))
      ) : (
        <p>No results found.</p>
      )}
    </>
  );
};

export default StarshipList;
