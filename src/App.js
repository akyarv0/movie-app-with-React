import React from "react";

import AppRouter from "./router/AppRouter";
import AuthProvider from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";
import MovieProvider from "./context/MovieProvider";

const App = () => {
  return (
    <div className="dark:bg-gray-dark ">
      <AuthProvider>
        <MovieProvider>
          <ToastContainer />
          <AppRouter />
        </MovieProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
