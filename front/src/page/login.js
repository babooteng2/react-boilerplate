import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/context/authProvider";

const Login = () => {
  document.title = "LOG IN";
  const handleOnHome = () => navigate("/");
  const { user, setUser, setLoggedIn } = useContext(AuthContext);
  const [info, setInfo] = useState({ user_id: "", user_pw: "" });
  const navigate = useNavigate();
  const handlerOnSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    if (info.user_id && info.user_pw) {
      setUser(info);
      setLoggedIn();
      navigate("/myinfo");
    } else {
      alert("아이디 또는 비번을 입력해주세요");
    }
  };
  const handlerOnChange = (e) => {
    const { value, name } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    console.log("[user] ", user);
  }, [user]);

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={handlerOnSubmit}>
        <input
          type="text"
          name="user_id"
          onChange={handlerOnChange}
          value={info.user_id}
        />
        <input
          type="password"
          name="user_pw"
          onChange={handlerOnChange}
          value={info.user_pw}
        />
        <button type="submit">로그인</button>
      </form>
      <button onClick={handleOnHome}>홈</button>
    </div>
  );
};

export default Login;
