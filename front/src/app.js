import React from "react";
import { BrowserRouter as Routes, useRoutes } from "react-router-dom";
import routeData from "./router";

const Router = () => useRoutes(routeData);

const App = () => {
  return (
    <Routes>
      <Router />
    </Routes>
  );
};

export default App;
