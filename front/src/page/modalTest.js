import { useContext } from "react";
import { ModalContext } from "../component/context/modalContextProvider";
import Modal2 from "../component/modal/modal2";
import Modal3 from "../component/modal/modal3";

const ModalTest = () => {
  const { showModal } = useContext(ModalContext);
  const handleModal2 = () => {
    const props = { title: "22", desc: "22" };
    showModal({ modalContent: () => <Modal2 {...props} /> });
  };
  const handleModal3 = () => {
    const props = { title: "33", desc: "33" };
    showModal({ modalContent: () => <Modal3 {...props} /> });
  };

  return (
    <div>
      <h1>modaltest</h1>
      <div>
        <button onClick={handleModal2}>모달2</button>
        <button onClick={handleModal3}>모달3</button>
      </div>
    </div>
  );
};

export default ModalTest;
