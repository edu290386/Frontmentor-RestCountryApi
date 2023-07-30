import { useNavigate } from "react-router-dom";
import { data } from "../helpers/data";

const BorderCountry = ({ detailCountry }) => {
  const navigate2 = useNavigate();
  const changeCountry = (country) => {
    const getName = data.find((i) => i.alpha3Code == country);
    navigate2(`/country/${getName.name}`);
  };

  return (
    <div>
      <h2>Border Countries:</h2>
      <div className="flex flex-wrap gap-x-2 gap-y-2 ">
        {detailCountry.borders == undefined ? (
          <div>-</div>
        ) : (
          detailCountry.borders.map((border, index) => (
            <div
              onClick={() => changeCountry(border)}
              className="cursor-pointer font-light text-sm bg-white py-1 px-4 shadow rounded-sm"
              key={index}
            >
              {border}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BorderCountry;
