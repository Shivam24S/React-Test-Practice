// import Get from "./Get"; // 1
// import AxiosGet from "./AxiosGet"; //2
// import Post from "./Post"; //3

import Delete from "./Delete";

// import AxiosPost from "./AxiosPost"; //4

const ApiComponent = () => {
  return (
    <>
      {/* get using fetch  1*/}
      {/* <Get /> */}

      {/* get using axios 2 */}

      {/* <AxiosGet /> */}

      {/* posting Data with fetch 3 */}
      {/* <Post /> */}

      {/* posting Data with axios 4*/}
      {/* <AxiosPost /> */}

      {/* deleting Data with Fetch */}
      <Delete />
    </>
  );
};

export default ApiComponent;
