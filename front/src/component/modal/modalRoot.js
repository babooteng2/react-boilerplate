import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../context/modalContextProvider";

const styledObj = {
  display: "flex",
  position: "fixed",
  top: 0,
  left: 0,
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  zIndex: -1,
  background: "rgba(0,0,0,.3)",
};
const ModalRoot = () => {
  const {
    isShow,
    hideModal,
    modalContent: Component,
  } = useContext(ModalContext);
  /* console.log(
    "in Modal - component type : ",
    typeof Component,
    typeof Component == "string"
  ); */

  if (isShow) {
    return ReactDOM.createPortal(
      <>
        <div style={styledObj}>
          <button onClick={hideModal}>&times;</button>
          {typeof Component == "string" ? Component : <Component />}
        </div>
      </>,
      document.querySelector("#modal-root")
    );
  } else return null;
};

export default ModalRoot;
