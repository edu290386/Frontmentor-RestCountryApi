import { BsMoonStars } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="flex justify-center w-screen shadow">
      <div className="flex items-center justify-between w-[92%]  h-20">
        <h1 className="font-bold text-lg md:text-xl text-very-dark-blue-text">
          Where in the world?
        </h1>
        <div className="font-semibold text-sm flex flex-row items-center justify-between gap-x-1 md:gap-x-2">
          <BsMoonStars />
          <button>Dark Mode</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;