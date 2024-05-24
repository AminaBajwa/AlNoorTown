import React, { useState } from 'react';

const Notification = ({ message }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className="bg-green-500 text-white p-4 fixed bottom-0 left-0 right-0">
          <p>{message}</p>
          <button onClick={handleClose} className="ml-2 text-white font-bold float-right">
            X
          </button>
        </div>
      )}
    </>
  );
};

