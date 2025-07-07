import React from "react";

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-50 mt-6">
      <div className="bg-azul text-white p-4 rounded shadow-md">
        {message}
      </div>
    </div>
  );
};

export default CustomAlert;
