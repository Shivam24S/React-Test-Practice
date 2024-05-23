import axios from "axios";
import { useEffect, useState } from "react";

const AxiosGet = () => {
  const [userName, setUserName] = useState([]);

  const [startFetch, setStartFetch] = useState(false);

  useEffect(() => {
    async function fetchingData() {
      try {
        const res = await axios("https://jsonplaceholder.typicode.com/users");
        setUserName(res.data);

        if (res.status === 201) {
          throw new Error("sorry can't able to fetch data");
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (startFetch) {
      fetchingData();
    }
  }, [startFetch]);

  const handleClick = () => {
    setStartFetch(true);
  };

  return (
    <>
      <button onClick={handleClick}>Fetch user Name</button>
      {userName.map((user) => (
        <div key={user.id}>
          <h5>{user.name}</h5>{" "}
        </div>
      ))}
    </>
  );
};

export default AxiosGet;
