// запросить данные по fetch, получить состояние error, isLoading

import { useState, useEffect } from "react";
import axios from "axios";
import { MOCK_DATA } from "./mock";

import { delay } from "./utils";
// import { RAPID_API_KEY } from "@env";

// const rapidApiKey = RAPID_API_KEY;
const rapidApiKey = "";

const useFetch = (endpoint, query) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      //   const response = await axios.request(options);
      //   setData(response.data.data);

      await delay(2000);
      const response = MOCK_DATA[endpoint];
      setData(response.data);

      setIsLoading(false);
    } catch (error) {
      setIsError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetchData = () => {
    setIsLoading(true);
    fetchData();
  };

  return { isLoading, isError, data, refetchData };
};

export default useFetch;
