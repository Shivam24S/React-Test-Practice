import { useEffect, useState } from "react";

const Post = () => {
  const [postData, setPostData] = useState(false);

  const [postMsg, setPostMsg] = useState();

  const [error, setError] = useState();

  const handleClick = () => {
    setPostData(true);
  };

  useEffect(() => {
    async function postingData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            // body: JSON.stringify("")
          }
        );

        if (response.ok) {
          setPostMsg("Data posted successfully");
        }

        if (!response.ok) {
          setError("can't able to post Data");
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (postData) {
      postingData();
    }
  }, [postData]);

  return (
    <>
      <button onClick={handleClick}>post Data</button>
      <br />

      {error ? <h5>{error}</h5> : <h5>{postMsg}</h5>}
    </>
  );
};

export default Post;
