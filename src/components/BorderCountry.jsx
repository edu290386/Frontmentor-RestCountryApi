import { useNavigate } from "react-router-dom";
import { data } from "../helpers/data";

const BorderCountry = ({ detailCountry }) => {
  const navigate2 = useNavigate();

  const changeCountry = (country) => {
    const getCountry = data.find((i) => i.alpha3Code == country);
    navigate2(`/country/${getCountry.name}`);
  };

  const getName = (country) => {
    const newName = data.find((i) => i.alpha3Code == country);
    return newName.name;
  };

  return (
    <div>
      <h2 className="text-base font-medium">Border Countries:</h2>
      <div className="flex flex-wrap gap-x-2 gap-y-2 my-4 mb-16">
        {detailCountry.borders == undefined ? (
          <div>-</div>
        ) : (
          detailCountry.borders.map((border, index) => (
            <div
              onClick={() => changeCountry(border)}
              className="cursor-pointer font-light text-xs bg-white py-2 px-4 rounded shadow-md"
              key={index}
            >
              {getName(border)}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BorderCountry;
