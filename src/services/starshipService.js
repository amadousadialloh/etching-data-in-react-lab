const BASE_URL = "https://swapi.dev/api/";
export const fetchApi = async () => {
  try {
    const getStarships = await fetch(`${BASE_URL}starships`);
    const starshipsData = await getStarships.json();
    return starshipsData.results;
  } catch (error) {
    console.log("error fetching data");
  }
};
