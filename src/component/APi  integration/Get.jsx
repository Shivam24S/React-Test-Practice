import { useEffect, useState } from "react";

const Get = () => {
  const [userName, setUserName] = useState([]);

  const [fetchingData, setFetchingData] = useState(false);

  useEffect(() => {
    async function fetching() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const resData = await response.json();
        setUserName(resData);

        if (!response.ok) {
          throw new Error("sorry can't able to fetch user data");
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (fetchingData) {
      fetching();
    }
  }, [fetchingData]);

  const handleClick = () => {
    setFetchingData(true);
  };

  return (
    <>
      <button onClick={handleClick}>get title</button>
      {userName.map((users) => (
        <div key={users.id}>
          <h5>{users.title}</h5>
        </div>
      ))}
    </>
  );
};

export default Get;
