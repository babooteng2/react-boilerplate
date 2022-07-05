import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authProvider";

const RequiredAuth = ({ children }) => {
  const { loadUser } = useContext(AuthContext);
  const userObj = loadUser();
  // userObj가 비어있지않고 {} user_id가 비어있지않으면 true
  const flag = !!(Object.keys(userObj).length && userObj?.user_id !== "");
  console.log("myInfo : ", children, typeof children, " userObj ", userObj);
  if (flag) return children;
  else return <Navigate to={"/"} replace />;
};

export default RequiredAuth;
