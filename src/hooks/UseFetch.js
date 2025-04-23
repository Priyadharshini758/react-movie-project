import { useEffect, useState } from "react";

export const UseFetch = ( apipath, queryTerm = "" ) => {
  console.log(apipath)

  const [data, setData] = useState([]);
  const key = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/${apipath}?api_key=${key}${queryTerm ? `&query=${queryTerm}` : ''}`;
  useEffect(() => {
    async function fetchMovies() {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => setData(jsonData.results));
    }
    fetchMovies();
  }, [url]);
  return { data };
};
