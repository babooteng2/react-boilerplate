const Modal1 = ({ hideModal, title, desc }) => {
  return (
    <>
      <div>{title}</div>
      <div>{desc}</div>
      <div>
        <button type="button" onClick={hideModal}>
          끔
        </button>
      </div>
    </>
  );
};

export default Modal1;
