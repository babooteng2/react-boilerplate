import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/context/authProvider";
import { useAuth } from "../components/context/fakeAuthProvider";

const Home = () => {
  document.title = "HOME";
  const { user } = useContext(AuthContext);
  console.log("[user]", user);
  const navigate = useNavigate();
  const handleOnClick = () => {
    if (Object.keys(user).length !== 0) navigate("/myinfo");
    else navigate("/login");
  };
  const { user: fakeUser, signout } = useAuth();
  console.log("fakeUser ", fakeUser);

  const handleOnLogOut = () => {
    signout();
    console.log("fakeUser ", fakeUser);
  };
  const handleOnAbout = () => {
    navigate("/about");
  };
  return (
    <div>
      <h1>home!</h1>
      <button onClick={handleOnClick}>로그인</button>
      <button onClick={handleOnLogOut}>로그아웃</button>
      <button onClick={handleOnAbout}>어바웃</button>
    </div>
  );
};

export default Home;
