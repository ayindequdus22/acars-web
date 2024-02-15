import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../useFetch";
import { baseUrl,requests } from "../necessities";
// setRes(result);

export function Test() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { result, loading, error } = useFetch(
    `${baseUrl}${requests.fetchTrending}`
  );
//   let realRes = result?.results[0].title;
//   console.log(realRes)
  let realRes = result?.results;
  const [movies, setMovies] = useState(null);
  useEffect(() => {
      setMovies(result?.results);
    }, [movies, loading]);

  return (
    <>
   {!loading ? (
            realRes &&
            realRes.map((movie, ind) => (
              <>
                <div className="RowMv" key={ind}>
              {console.log(movie.title)}
                  <div className="RowImg">
                    {/* <img
                      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} loading="lazy"
                      alt={movie.title}
                    /> */}
                  </div>
                  <div className="RowContent">
                    <h6>
                      {movie.title ? movie.title : movie.name}
                    </h6>
                    </div>
                    </div>
    </>))):(
        <></>
    )}
    </>
  )}