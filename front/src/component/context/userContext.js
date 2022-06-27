import { createContext } from "react";

const UserContext = createContext({
  loggedUser: {
    username: "",
    email: "",
  },
  setLoggedUser: () => {},
  loggedIn: false,
  setLoggedIn: () => {},
});

export default UserContext;
