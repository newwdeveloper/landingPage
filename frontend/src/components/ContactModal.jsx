import { createPortal } from "react-dom";
import Form from "./Form";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      onClose();
    }
  };

  return createPortal(
    <div
      id="modal-backdrop"
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30"
      onClick={handleBackdropClick}
      style={{
        backdropFilter: "blur(8px)", // 🔹 Forces blur
        WebkitBackdropFilter: "blur(8px)", // 🔹 For Safari & older browsers
      }}
    >
      <div
        className="bg-blue-900 p-6 rounded-lg shadow-lg w-[400px] relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button Correctly Positioned */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-red-500 focus:outline-none"
        >
          ✖
        </button>
        <h2 className="text-xl font-bold text-center text-white mb-4">
          CONTACT US TODAY
        </h2>
        <Form />
      </div>
    </div>,
    document.body
  );
};

export default ContactModal;
