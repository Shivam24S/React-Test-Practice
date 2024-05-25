// import CrudLogic from "./component/Crud Todo/CrudLogic"; //1
// import ApiComponent from "./component/APi  integration/ApiComponent"; //2

import CrudCtx from "./component/Context Crud/CrudCtx";

const App = () => {
  return (
    <>
      {/* simple Crud todo  1 */}
      {/* <CrudLogic /> */}

      {/* api integration 2 */}
      {/* <ApiComponent /> */}

      {/* context API Crud Todo */}
      <CrudCtx />
    </>
  );
};

export default App;
