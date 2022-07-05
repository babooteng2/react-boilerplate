import { useContext } from "react";
import { AuthContext } from "../components/context/authProvider";

const Home = () => {
  const { loadUser } = useContext(AuthContext);
  console.log(loadUser());
  return <div>home!</div>;
};

export default Home;
