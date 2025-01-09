function Modal({ show, onClose, children }) {
  if (!show) return null;
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div>
      <div className="backdrop " onClick={handleBackdropClick}>
        <div className="modal-content bg-white p-5 rounded-lg shadow-lg overflow-y-auto max-h-96 ">
          <button
            className="close-btn float-right text-red-500 font-bold "
            onClick={onClose}
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
