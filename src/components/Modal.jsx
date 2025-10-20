import ReactDOM from "react-dom";
import "../styles/Modal.scss";

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div 
    className="modal"
    onClick={onClose}
    >
      <div 
      className="modal__content"
      onClick={(e) => e.stopPropagation()} 
      >
        <button className="modal__close" onClick={onClose}>
          ✖
        </button>
        {title && <h3 className="modal__title">{title}</h3>}
        <div className="modal__body">{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root") 
  );
}

export default Modal;
