// import Get from "./Get"; // 1
// import AxiosGet from "./AxiosGet"; //2
// import Post from "./Post"; //3

import AxiosPost from "./AxiosPost";

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
      <AxiosPost />
    </>
  );
};

export default ApiComponent;
