import { useEffect, useState } from "react";
import { fetchApi } from "./services/starshipService";
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
const App = () => {
  const [starships, setStarships] = useState([]);
  const [searchquery, setSearchquery] = useState("");

  useEffect(() => {
    const fetchStarships = async () => {
      const data = await fetchApi();
      setStarships(data);
    };

    fetchStarships();
  }, []);

  return (
    <>
      <h1>Star Wars API</h1>

      <StarshipSearch
        searchquery={searchquery}
        setSearchquery={setSearchquery}
      />
      <StarshipList starships={starships} searchquery={searchquery} />
    </>
  );
};

export default App;
