import { useParams } from "react-router-dom";
import { data } from "../helpers/data";
import { IoMdReturnLeft } from "react-icons/io";

const DetailCountry = () => {
  const { nameCountry } = useParams();

  const detailCountry = data.filter((country) => country.name == nameCountry);
    console.log(detailCountry)
  return (
    <div className="mx-6">
      <section className="bg-very-light-gray  pt-6 h-screen mx-auto">
        <div className="relative">
          <IoMdReturnLeft className="absolute top-3 left-11" />
          <button className=" bg-white w-36 h-10 pl-7 shadow rounded-lg">
            Back
          </button>
        </div>
        <article className="my-12 mx-auto flex flex-col  sm:flex-row sm:justify-between">
          <img
            className="w-full max-w-[330px] h-[240px]"
            src={detailCountry[0].flags.svg}
            alt=""
          />
          <div>
            <h2 className="text-lg font-bold mt-6 my-4">{detailCountry[0].name}</h2>

            <article className="text-sm">
              <div> 
              <div className="my-2 flex gap-1 items-center">
                <p className="font-semibold">Native Name:</p>
                <span className="font-light">{detailCountry[0].nativeName}</span>
              </div>
              <div className="my-2 flex gap-1">
                <p className="font-semibold">Population:</p>
                <span className="font-light">{detailCountry[0].population.toLocaleString()}</span>
              </div>
              <div className="my-2 flex gap-1">
                <p className="font-semibold">Region:</p>
                <span className="font-light">{detailCountry[0].region}</span>
              </div>
              <div className="my-2 flex gap-1">
                <p className="font-semibold">Sub Region:</p>
                <span className="font-light">{detailCountry[0].subregion}</span>
              </div>
              </div>
            </article>
            <div></div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default DetailCountry;
