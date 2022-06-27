import { useContext } from "react";
import { ModalContext } from "../component/context/modalContextProvider";
import EventMaker from "../component/modal/eventMaker";

const ModalTest = () => {
  const { showModal, hideModal } = useContext(ModalContext);

  return (
    <div>
      <h1>modaltest</h1>
      <button onClick={() => showModal(<EventMaker onClick={hideModal} />)} />
    </div>
  );
};

export default ModalTest;
