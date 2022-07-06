import { useContext } from "react";
import { AuthContext } from "../components/context/authProvider";

const MyInfo = () => {
  document.title = "MY INFO";
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Welcome {user?.user_id}</h1>
    </div>
  );
};

export default MyInfo;
