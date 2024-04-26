import React from "react";

import AppRouter from "./router/AppRouter";
import AuthProvider from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="dark:bg-gray-dark ">
      <AuthProvider>
        {" "}
        <ToastContainer />
        <AppRouter />
      </AuthProvider>
    </div>
  );
};

export default App;
