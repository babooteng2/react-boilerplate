import { useContext } from "react";
import { AuthContext } from "../components/context/authProvider";

const Home = () => {
  document.title = "HOME";
  const { user } = useContext(AuthContext);
  console.log(user);
  return <div>home!</div>;
};

export default Home;
