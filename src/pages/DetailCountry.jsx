import { useParams } from "react-router-dom";
import { data } from "../helpers/data";
import { IoMdReturnLeft } from "react-icons/io";

const DetailCountry = () => {
  const { nameCountry } = useParams();

  const detailCountry = data.filter((country) => country.name == nameCountry);

  return (
    <div className="mx-6">
      <section className="bg-very-light-gray  pt-6 h-screen mx-auto">
        <div className="relative">
          <IoMdReturnLeft className="absolute top-3 left-11" />
          <button className=" bg-white w-36 h-10 pl-7 shadow rounded-lg">
            Back
          </button>
        </div>
        <article className="my-16 mx-auto flex flex-col  sm:flex-row sm:justify-between">
          <img
            className="w-full max-w-[330px] h-[240px]"
            src={detailCountry[0].flags.svg}
            alt=""
          />
          <div>
            <h2>{detailCountry[0].name}</h2>
          </div>
        </article>
      </section>
    </div>
  );
};

export default DetailCountry;
