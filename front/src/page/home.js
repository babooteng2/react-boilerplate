import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/context/authProvider";

const Home = () => {
  document.title = "HOME";
  const { user } = useContext(AuthContext);
  console.log("[user]", user);
  const navigate = useNavigate();
  const handleOnClick = () => {
    if (Object.keys(user).length !== 0) navigate("/myinfo");
    else navigate("/login");
  };
  return (
    <div>
      <h1>home!</h1>
      <button onClick={handleOnClick}>로그인</button>
    </div>
  );
};

export default Home;
