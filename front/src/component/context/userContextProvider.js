import { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const setLoggedUser = (data) =>
    setState((prev) => ({ ...prev, loggedUser: data }));
  const setLoggedIn = () =>
    setState((prev) => ({ ...prev, isLoggedIn: !prev.loggedIn }));
  const initialState = {
    loggedUser: {},
    setLoggedUser,
    loggedIn: false,
    setLoggedIn,
  };
  const [state, setState] = useState(initialState);
  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
