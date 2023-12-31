function RegionFilter({ onSelect, DarkMode }) {
  function handleChange(event) {
    onSelect(event.target.value);
  }

  return (
    <select
      className={` ${DarkMode ? "dark" : ""}`}
      name="region"
      defaultValue=""
      onChange={handleChange}
    >
      <option value="" key="default">
        {" "}
        Filter by Region:{" "}
      </option>
      <option key="africa">Africa</option>
      <option key="americas">Americas</option>
      <option key="asia">Asia</option>
      <option key="europe">Europe</option>
      <option key="oceania">Oceania</option>
    </select>
  );
}

export default RegionFilter;
