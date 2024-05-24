import { useEffect, useState } from "react";

const Delete = () => {
  const [deleteData, setDeleteData] = useState(false);

  const [deleteMsg, setDeleteMsg] = useState();

  const [error, setError] = useState();

  const [deletingData, setDeletingData] = useState();

  const handleClick = () => {
    setDeleteData(true);
  };
  useEffect(() => {
    async function deletingData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/pos/1",
          {
            method: "DELETE",
          }
        );
        const resData = await response.json();
        setDeletingData(resData);
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

export default Delete;
