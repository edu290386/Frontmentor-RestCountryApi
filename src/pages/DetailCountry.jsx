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
    <div className="flex justify-center items-center mx-auto w-[88%]">
      <section className="bg-very-light-gray min-h-screen mx-auto">
        <div className="relative my-8">
          <IoMdReturnLeft className="absolute top-3 left-9" />
          <button onClick={backHome} className=" bg-white w-32 h-9 pl-7 shadow rounded-lg">
            Back
          </button>
        </div>
        <article className=" mx-auto flex flex-col  sm:flex-row sm:justify-between">
          <img
            className="my-8 h-[240px] object-cover"
            src={detailCountry.flags.svg}
            alt=""
          />
          <div>
            <h1 className="text-2xl font-bold">
              {detailCountry.name}
            </h1>
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
