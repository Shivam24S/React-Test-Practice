import axios from "axios";
import { useEffect, useState } from "react";

const AxiosPost = () => {
  const [postData, setPost] = useState(false);

  const [error, setError] = useState();

  const [postMsg, setPostMsg] = useState();

  const handleClick = () => {
    setPost(true);
  };

  useEffect(() => {
    async function postingData() {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (response.status === 201) {
          setPostMsg("data posted successfully");
          setError("");
        } else {
          setError("can't able to post now");
          setPost("");
        }
      } catch (error) {
        setError("can't able to post now");
        console.error(error);
      }
    }

    if (postData) {
      postingData();
    }
  }, [postData]);

  return (
    <>
      <button onClick={handleClick}>Post Data</button>

      {error ? <h5>{error}</h5> : <h5>{postMsg}</h5>}
    </>
  );
};

export default AxiosPost;
