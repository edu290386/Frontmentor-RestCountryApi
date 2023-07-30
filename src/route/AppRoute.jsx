import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetailCountry from "../pages/DetailCountry";
import NavBar from "../components/NavBar";
import { BsMoonStars } from "react-icons/bs";

const AppRoute = () => {
  return (
    <div >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:nameCountry" element={<DetailCountry />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoute;
