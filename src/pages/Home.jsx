import { FiSearch } from "react-icons/fi";
import Card from "../components/Card";
import { data } from "../helpers/data";
import { useState } from "react";

const Home = () => {
  const [countries, setCountries] = useState(data);
  const [findCountry, setFindCountry] = useState({ input: "", select: "" });

  const handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setFindCountry({ ...findCountry, [name]: value });
  };

  const filterCountries = countries.filter(
    (country) =>
      findCountry.input == "" ||
      country.name.toLowerCase().includes(findCountry.input.toLowerCase())
  );

  const filterRegion = filterCountries.filter(
    (country) =>
      findCountry.select == "" ||
      country.region.toLowerCase() == findCountry.select
  );

  return (
    <div className="pt-4 m-auto w-[92%]">
      <form className="flex flex-col mx-auto w-full gap-4 items-center max-w-[1440px] sm:flex-row sm:justify-between">
        <div className="relative">
          <FiSearch className="absolute top-3 left-4" />
          <input
            onChange={handleChange}
            name="input"
            value={findCountry.input}
            className="border bg-white w-72 h-10 pl-11 sm:w-80 shadow rounded-lg"
            type="text"
            placeholder="Search for a country..."
          />
        </div>
        <select
          onChange={handleChange}
          name="select"
          value={findCountry.select}
          className="bg-white w-72 h-10 px-4 shadow rounded-lg"
        >
          <option className="" value="">
            Filter by Region
          </option>
          <option className="" value="africa">
            Africa
          </option>
          <option className="" value="americas">
            Americas
          </option>
          <option className="" value="asia">
            Asia
          </option>
          <option className="" value="europe">
            Europe
          </option>
          <option className="" value="oceania">
            Oceania
          </option>
        </select>
      </form>
      <article className="flex flex-wrap mx-auto gap-16 justify-center mt-4 max-w-[1440px]">
        {filterRegion.map((country, index) => (
          <Card
            key={index}
            name={country.name}
            image={country.flags.svg}
            region={country.region}
            population={country.population}
            capital={country.capital}
          />
        ))}
      </article>
    </div>
  );
};

export default Home;

