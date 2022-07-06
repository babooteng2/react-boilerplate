import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/context/authProvider";

const MyInfo = () => {
  document.title = "MY INFO";
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleOnHome = () => navigate("/");
  const handleOnLogin = () => navigate("/login");
  return (
    <div>
      <h1>Welcome {user?.user_id}</h1>
      <button onClick={handleOnHome}>홈</button>
      <button onClick={handleOnLogin}>로그인</button>
    </div>
  );
};

export default MyInfo;
