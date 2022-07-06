import { createContext, useContext, useState } from "react";

const fakeAuth = {
  isAuthenticated: false,
  signin: (cb) => {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 1000);
  },
  signout: (cb) => {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 1000);
  },
};

const initalState = {
  user: null,
  signin: () => {},
  signout: () => {},
};

const FakeAuthContext = createContext(initalState);

const useProvideAuth = () => {
  const [user, setUser] = useState();
  const signin = (prop) => {
    fakeAuth.signin(() => {
      setUser(prop);
    });
  };
  const signout = () => {
    fakeAuth.signout(() => {
      setUser(null);
    });
  };

  return { user, signin, signout };
};

const useAuth = () => {
  return useContext(FakeAuthContext);
};

const FakeAuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return (
    <FakeAuthContext.Provider value={auth}>{children}</FakeAuthContext.Provider>
  );
};

export { useAuth, FakeAuthContext };
export default FakeAuthProvider;
