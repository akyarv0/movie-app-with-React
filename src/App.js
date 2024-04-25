import React from "react";

import AppRouter from "./router/AppRouter";
import AuthProvider from "./context/AuthProvider";

const App = () => {
  return (
    <div className="dark:bg-gray-dark ">
      <AuthProvider>
        {" "}
        <AppRouter />
      </AuthProvider>
    </div>
  );
};

export default App;
