import React, { createContext, useState } from "react";

const initState = {
  user: {},
  setUser: () => {},
  loggedIn: false,
  setLoggedIn: () => {},
  logout: () => {},
};

export const AuthContext = createContext(initState);

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(initState);
  const setUser = (prop) => {
    setData((prev) => ({ ...prev, user: prop }));
  };
  const setLoggedIn = () => {
    setData((prev) => ({ ...prev, loggedIn: !prev.loggedIn }));
  };
  const logout = () => {
    setData((prev) => ({ ...prev, user: {} }));
  };

  return (
    <AuthContext.Provider value={{ ...data, setUser, setLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
