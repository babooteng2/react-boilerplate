import RequiredAuth from "./components/common/requiredAuth";
import Home from "./page/home";
import Login from "./page/login";
import MyInfo from "./page/myInfo";

const Router = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  {
    path: "/myinfo",
    element: (
      <RequiredAuth>
        <MyInfo />
      </RequiredAuth>
    ),
  },
];

export default Router;
