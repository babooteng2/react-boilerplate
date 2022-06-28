import { useContext } from "react";
import UserContext from "../component/context/userContext";
import { ModalContext } from "../component/context/modalContextProvider";
import Modal1 from "../component/modal/modal1";
//import LangContext from "../component/context/langContext";

const Home = () => {
  const { loggedIn } = useContext(UserContext);
  /* console.log(LangContext.Consumer._currentValue.lang); */
  //const lang = useContext(LangContext);
  const { showModal, hideModal, isShow, modalContent, modalProps } =
    useContext(ModalContext);
  console.log(
    "isShow : ",
    isShow,
    " modalContent : ",
    modalContent,
    " modalProps : ",
    modalProps
  );
  const handleShowModal = () => {
    showModal({
      /* modalContent: "text 된다 야들아", */
      /* modalProps: { title: "제목1", desc: "설명1" }, */
      /* modalContent: () => <Modal1 {...modalProps} />, */
      modalContent: () => <Modal1 title="제목1" desc="설명1" />,
    });
  };

  return (
    <div>
      <div>home! {loggedIn}</div>
      {/* <ModalContext.Consumer>
        {(context) => (
          <button onClick={context.showModal(<HobbyModal />)}>
            설문을 시작하기
          </button>
        )}
      </ModalContext.Consumer> */}
      <button onClick={handleShowModal}>모달열기</button>
      <button onClick={hideModal}>모달닫기</button>
    </div>
  );
};

export default Home;
