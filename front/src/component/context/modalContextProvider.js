import React, { createContext, useState } from "react";

const ModalContext = createContext({
  component: null,
  isOpen: false,
  showModal: () => {},
  hideModal: () => {},
});

const ModalContextProvider = ({ children }) => {
  const showModal = ({ component, modalProps = {} }) => {
    setState({ ...state, component, modalProps, isOpen: true });
  };

  const hideModal = () => {
    setState({ ...state, isOpen: false });
  };

  const initialState = {
    component: null,
    modalProps: {},
    isOpen: false,
    showModal,
    hideModal,
  };

  const [state, setState] = useState(initialState);

  return (
    <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
  );
};

export default ModalContextProvider;
export { ModalContext };
