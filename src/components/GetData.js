import { useEffect, useContext } from "react";
import List from "../views/List";
import Pagination from "./Pagination";
import { PlantsContext } from "../context/PlantsContext";

function GetData() {
  const { output, output2, loading, page, totalPages, setPage, fetchData } =
    useContext(PlantsContext);
  /*   const [output, setOutput] = useState();
  const [output2, setOutput2] = useState();
  const [loading, setLoading] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  /* let api_token = "";

  const fetchData = () => {
    const authorize = async () => {
      setLoading(true);
      let formdata = new FormData();
      formdata.append("grant_type", "client_credentials");
      formdata.append("client_id", configData.client_id);
      formdata.append("client_secret", configData.client_secret);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      const res = await fetch(
        cors_url + "https://open.plantbook.io/api/v1/token/",
        requestOptions
      ).catch(console.log("error"));
      const data = await res.json();
      api_token = data.access_token;
      console.log("Successful Authorization. Token: " + api_token);

      const getObject = async () => {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + api_token);

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        const res = await fetch(
          cors_url +
            "https://open.plantbook.io/api/v1/plant/search?alias=a&limit=100&offset=0",
          requestOptions
        ).catch(console.log("error"));
        const data = await res.json();
        setOutput(data.results);
        setTotalPages(Math.ceil(data.results.length / plants_per_page));

        const res2 = await fetch(
          cors_url +
            "https://open.plantbook.io//api/v1/plant/detail/acer%20pseudoplatanus/",
          requestOptions
        ).catch(console.log("error"));
        setLoading(false);
        const data2 = await res2.json();
        setOutput2(data2);
      };
      getObject();
    };

    authorize();
  }; */

  useEffect(() => {
    fetchData();
  }, []);
  const handleClick = (num) => {
    setPage(num);
  };
  console.log("Output", output);
  console.log("Output2", output2);
  return (
    <>
      <h1>Leafy</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <List plants={output} page={page} />
          <Pagination totalPages={totalPages} handleClick={handleClick} />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </>
      )}
    </>
  );
}

export default GetData;
