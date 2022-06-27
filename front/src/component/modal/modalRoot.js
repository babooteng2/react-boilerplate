import { useContext } from "react";
import { ModalContext } from "../context/modalContextProvider";
import Portal from "./portal";

const ModalRoot = () => {
  const {
    component: Component,
    isOpen,
    hideModal,
    modalProps,
  } = useContext(ModalContext);
  return (
    Component &&
    isOpen && (
      <Portal selector="#portal">
        <Component {...modalProps} isOpen={isOpen} hideModal={hideModal} />
      </Portal>
    )
  );
};

export default ModalRoot;
