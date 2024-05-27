// import CrudLogic from "./component/Crud Todo/CrudLogic"; //1
// import ApiComponent from "./component/APi  integration/ApiComponent"; //2

// import CrudCtx from "./component/Context Crud/CrudCtx"; //3

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainRoute from "./component/Router/MainRoute";
import Home from "./component/Router/Home";
import Error from "./component/Router/Error";
import About from "./component/Router/About";
import Product from "./component/Router/Product";
import Service from "./component/Router/Service";
import Help from "./component/Router/Help";

const App = () => {
  // routing

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoute />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "service",
          element: <Service />,
        },
        {
          path: "help",
          element: <Help />,
        },
      ],
    },
  ]);

  return (
    <>
      {/* simple Crud todo  1 */}
      {/* <CrudLogic /> */}

      {/* api integration 2 */}
      {/* <ApiComponent /> */}

      {/* context API Crud Todo 3*/}
      {/* <CrudCtx /> */}

      {/* Routing concept 4*/}

      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
