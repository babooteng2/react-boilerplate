import { BrowserRouter as Routes, useRoutes } from "react-router-dom";
import LangContext from "./component/context/langContext";
import UserContextProvider from "./component/context/userContextProvider";
import ModalContextProvider from "./component/context/modalContextProvider";

import routeData from "./router";

const Router = () => useRoutes(routeData);

const App = () => {
  const langObj = { lang: "en" };
  return (
    <LangContext.Provider value={langObj}>
      <UserContextProvider>
        <ModalContextProvider>
          <div id="portal" />
          <Routes>
            <Router />
          </Routes>
        </ModalContextProvider>
      </UserContextProvider>
    </LangContext.Provider>
  );
};

export default App;
