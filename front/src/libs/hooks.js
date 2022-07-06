import { useContext, useState } from "react";
import fakeAuth from "../component/api/fakeAuth";

const useProvideAuth = () => {
  const [user, setUser] = useState();
  const singin = (cb) => {
    fakeAuth.signin(() => {
      setUser("User");
      cb();
    });
  };
  const signout = (cb) => {
    fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return { user, singin, signout };
};

const useAuth = () => {
  return useContext(fakeAuth);
};

export { useProvideAuth, useAuth };
