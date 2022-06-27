import { useContext } from "react";
import UserContext from "../component/context/userContext";

/* 
import LangContext from "../component/context/langContext";
import ModalContext from "../component/context/modalContext";
 */
const Home = () => {
  const { loggedIn } = useContext(UserContext);
  /* console.log(LangContext.Consumer._currentValue.lang); */
  //const lang = useContext(LangContext);
  //const { showModal, hideModal } = useContext(ModalContext);

  return (
    <div>
      <div>home! {loggedIn}</div>
    </div>
  );
};

export default Home;
