import { Props } from "./Interfaces";
import { Route, Routes } from "react-router-dom";

import Home from "../../pages/home";

const RouteHandler: React.FC<Props> = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
};

export default RouteHandler;
