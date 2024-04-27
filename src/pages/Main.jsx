import React from "react";
import { useMovieContext } from "../context/MovieProvider";

const Main = () => {
  const { movies , loading } = useMovieContext();
  console.log({movies, loading});
  return <div>Main</div>;
};

export default Main;
