import React, { useEffect, useState } from "react";
const DamyMovie = () => {
  const [movie, setMovie] = useState([]);
  const [isLoadig, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchedData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();

      setMovie(data.results);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  //   useEffect(async () => {
  //     try {
  //       const response = await fetch("https://swapi.dev/api/films");
  //       setIsLoading(true);
  //       setError(null);
  //       if (!response.ok) {
  //         throw new Error("something went wrong");
  //       }
  //       const data = await response.json();
  //       setMovie(data.results);
  //       setIsLoading(false);
  //       setError(false);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //     setIsLoading(false);
  //   }, []);

  return (
    <div className="container d-flex flex-column bg-secondary align-items-center justify-content-center mt-3">
      <div className="container-fluid bg-primary p-5 m-3 d-flex justify-content-center align-items-center">
        <button onClick={fetchedData} className="btn btn-secondary ">
          fetch movie
        </button>
      </div>
      {isLoadig && <p>...loading</p>}
      {!isLoadig && error && <p style={{ color: "red" }}>{error}</p>}
      {!isLoadig && (
        <>
          {movie.map((dummy, index) => {
            return (
              <>
                <div className="container bg-primary p-5 mb-4" key={index}>
                  <h1>{dummy.title}</h1>
                  <p>{dummy.opening_crawl}</p>
                </div>
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DamyMovie;
