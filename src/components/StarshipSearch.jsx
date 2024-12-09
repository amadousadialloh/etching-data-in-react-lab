const StarshipSearch = ({ searchquery, setSearchquery }) => {
  const handleChange = (e) => {
    setSearchquery(e.target.value);
  };

  return (
    <>
      <h3>search</h3>

      <input
        onChange={handleChange}
        type="text"
        name="serach"
        id="search"
        value={searchquery}
      />
      <button style={{ color: "white" }} type="button">
        serach
      </button>
    </>
  );
};

export default StarshipSearch;
