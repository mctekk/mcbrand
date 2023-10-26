import React from "react";

interface ModalConfirmationProps {
  onClose: () => void;
}

const ModalConfirmation: React.FC<ModalConfirmationProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Confirmation</h2>
        <p>Your message has been sent successfully!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalConfirmation;
