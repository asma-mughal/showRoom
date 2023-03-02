import React from 'react';
import './Modal.css';
const Modal = ({ open, onClose,text }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src="" alt='/' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <p className='font-bold font-poppins'>{text}</p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Modal;