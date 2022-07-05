import { useContext } from "react";
import { AuthContext } from "../components/context/authProvider";

const MyInfo = () => {
  const { loadUser } = useContext(AuthContext);
  return (
    <div>
      <h1>Welcome {loadUser()}</h1>
    </div>
  );
};

export default MyInfo;
