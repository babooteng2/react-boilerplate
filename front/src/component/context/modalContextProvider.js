import React, { createContext, useState } from "react";
import ModalRoot from "../modal/modalRoot";

export const ModalContext = createContext({
  modalContent: {},
  isShow: false,
  modalProps: {},
  showModal: () => {},
  hideModal: () => {},
});

const ModalContextProvider = ({ children }) => {
  const [data, setData] = useState({
    modalContent: null,
    modalProps: {},
    isShow: false,
  });

  const showModal = ({ modalContent, modalProps = {} }) => {
    setData({ ...data, modalContent, modalProps, isShow: true });
  };

  const hideModal = () => {
    setData({ ...data, isShow: false });
  };

  /* const initialState = {
    modalContent: null,
    isShow: false,
    modalProps: {},
    showModal,
    hideModal,
  }; */

  return (
    <ModalContext.Provider value={{ ...data, showModal, hideModal }}>
      <ModalRoot />
      {children}
      {/* {state.isShow && <Modal content={state.modalContent} />} */}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
