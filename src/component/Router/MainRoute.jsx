import { Outlet } from "react-router";
import Header from "./Header";

const MainRoute = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainRoute;
