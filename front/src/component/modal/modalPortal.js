import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../context/modalContextProvider";

const ModalPortal = (props) => {
  const el = document.getElementById("app-modal");
  const { component, isOpen } = useContext(ModalContext);
  if (!isOpen) return ReactDOM.createPortal(<>{component}</>, el);
  else return null;
};

export default ModalPortal;
