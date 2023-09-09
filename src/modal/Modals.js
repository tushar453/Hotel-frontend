// Modal.js
import React from 'react';
import './Modal.css';

const Modals = ({ isOpen, onClose, imageSrc,desc, numberof,text }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <button className="book-button extra extra-4 " onClick={onClose}>
            Close
          </button>
        </div>
        <div className="modal-body">
          <div className="image-section">
            <img src={imageSrc} alt="Image" />
          </div>
          <div className="text-section">
            <p>{desc}</p>
            <p>{numberof} People Can Stay</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
