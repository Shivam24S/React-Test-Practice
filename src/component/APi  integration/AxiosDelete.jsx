import axios from "axios";
import { useEffect, useState } from "react";

const AxiosDelete = () => {
  const [deleteData, setDeleteData] = useState(false);

  const [deleteMsg, setDeleteMsg] = useState();

  const [error, setError] = useState();

  const handleClick = () => {
    setDeleteData(true);
  };
  useEffect(() => {
    async function deletingData() {
      try {
        const response = await axios.delete(
          "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (response.status === 200) {
          setDeleteMsg("Data deleted successfully");
        } else {
          setError("couldn't delete data");
        }
      } catch (error) {
        console.error(error);
        setError("Failed to delete data");
      }
    }

    if (deleteData) {
      deletingData();
    }
  }, [deleteData]);

  return (
    <>
      <button onClick={handleClick}>DeleteData</button>

      <br />

      {error ? <h5>{error}</h5> : <h5>{deleteMsg}</h5>}
    </>
  );
};

export default AxiosDelete;
