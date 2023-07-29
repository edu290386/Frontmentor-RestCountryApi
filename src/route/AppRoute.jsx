import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const AppRoute = () => {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoute;
