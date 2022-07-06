import RequiredAuth from "./components/common/requiredAuth";
import About from "./page/about";
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
  {
    path: "/about",
    element: <About />,
  },
];

export default Router;
