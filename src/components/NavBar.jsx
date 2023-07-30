import { BsMoonStars } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="bg-white flex justify-center drop-shadow">
      <div className="flex items-center justify-between w-[88%]  h-20">
        <h1 className="font-bold text-base md:text-xl text-very-dark-blue-text">
          Where in the world?
        </h1>
        <div className=" text-xs font-medium flex flex-row items-center justify-between gap-x-1 md:gap-x-2">
          <BsMoonStars />
          <button>Dark Mode</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;