import React from 'react';
import { IoMdClose } from 'react-icons/io';


const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <div
      className={`modal bg-[#03030391] fixed top-0 left-0 w-full h-full flex justify-center items-center ${
        isOpen ? 'open' : ''
      }`}
    >
      <div className="modal-content bg-white w-[80%] md:max-w-[400px] rounded-xl p-3">
        <div className="modal-header border-b-[1px] border-[#19594D] flex justify-between items-center">
          <span className="text-md font-semibold">Confirm Delete</span>
          <span
            className="text-md font-semibold cursor-pointer"
            onClick={onClose}
          >
            <IoMdClose className="text-[#19594D]" />
          </span>
        </div>
        <div className="modal-body p-3">
          <p>Are you sure you want to delete this user?</p>
        </div>
        <div className="modal-footer flex justify-between items-center gap-3">
          <button
            className="flex-1 bg-white border-[1px] border-[#19594D] text-[#19594D] py-1 px-3 rounded-sm"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="flex-1 bg-[#bf262e] py-1 px-3 text-white rounded-sm"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
