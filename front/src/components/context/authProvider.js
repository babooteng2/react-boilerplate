import React, { createContext, useState } from "react";

const initState = {
  user: {},
  login: () => {},
  logout: () => {},
  loadUser: () => {},
};

export const AuthContext = createContext(initState);

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(initState);
  const login = (prop) => {
    setData((prev) => ({ ...prev, user: prop }));
  };
  const logout = () => {
    setData((prev) => ({ ...prev, user: {} }));
  };
  const loadUser = () => data?.user;
  return (
    <AuthContext.Provider value={{ ...data, login, logout, loadUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
