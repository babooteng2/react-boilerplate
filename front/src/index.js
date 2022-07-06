import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import AuthProvider from "./components/context/authProvider";
import FakeAuthProvider from "./components/context/fakeAuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <FakeAuthProvider>
        <App />
      </FakeAuthProvider>
    </AuthProvider>
  </React.StrictMode>
);
