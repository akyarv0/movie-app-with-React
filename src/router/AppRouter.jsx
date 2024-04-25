import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";

import Navbar from "../components/Navbar";


const AppRouter = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/detail/:id" element={<MovieDetail />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
