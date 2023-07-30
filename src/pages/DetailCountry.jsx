import { useParams, useNavigate } from "react-router-dom";
import { data } from "../helpers/data";
import { IoMdReturnLeft } from "react-icons/io";
import MainCountry from "../components/MainCountry";
import SecondaryCountry from "../components/SecondaryCountry";
import BorderCountry from "../components/BorderCountry";

const DetailCountry = () => {
  const { nameCountry } = useParams();

  const detailCountry = data.find((country) => country.name == nameCountry);
  const navigate = useNavigate()

const backHome = () => {
    navigate("/")
}

  return (
    <div className="flex justify-center items-center">
      <section className="bg-very-light-gray  pt-6 min-h-screen mx-auto">
        <div className="relative">
          <IoMdReturnLeft className="absolute top-3 left-11" />
          <button onClick={backHome} className=" bg-white w-36 h-10 pl-7 shadow rounded-lg">
            Back
          </button>
        </div>
        <article className="my-12 mx-auto flex flex-col  sm:flex-row sm:justify-between">
          <img
            className="w-full max-w-[330px] h-[240px]"
            src={detailCountry.flags.svg}
            alt=""
          />
          <div>
            <h2 className="text-lg font-bold mt-6 my-4">
              {detailCountry.name}
            </h2>
            <article className="text-sm">
              <MainCountry detailCountry={detailCountry} />
              <SecondaryCountry detailCountry={detailCountry} />
            </article>
            <article>
              <BorderCountry detailCountry={detailCountry} />
            </article>
          </div>
        </article>
      </section>
    </div>
  );
};

export default DetailCountry;
