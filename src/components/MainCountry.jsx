const MainCountry = ({ detailCountry }) => {
  return (
    <div>
      <section className="my-4">
        <div className="my-2 flex gap-1 items-center">
          <p className="font-semibold">Native Name:</p>
          <span className="font-light">{detailCountry.nativeName}</span>
        </div>
        <div className="my-2 flex gap-1">
          <p className="font-semibold">Population:</p>
          <span className="font-light">
            {detailCountry.population.toLocaleString()}
          </span>
        </div>
        <div className="my-2 flex gap-1">
          <p className="font-semibold">Region:</p>
          <span className="font-light">{detailCountry.region}</span>
        </div>
        <div className="my-2 flex gap-1">
          <p className="font-semibold">Sub Region:</p>
          <span className="font-light">{detailCountry.subregion}</span>
        </div>
        <div className="my-2 flex gap-1">
          <p className="font-semibold">Capital:</p>
          <span className="font-light">{detailCountry.capital}</span>
        </div>
      </section>
    </div>
  );
};

export default MainCountry;
