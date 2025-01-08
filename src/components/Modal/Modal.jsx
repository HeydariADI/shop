function Modal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="backdrop " onClick={onClose}>
      <div className="modal-content bg-white p-5 rounded-lg shadow-lg">
        <button
          className="close-btn float-right text-red-500 font-bold "
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
