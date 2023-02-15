import React, { useState } from "react";
import { PopoverAlert } from "../components";
import { ThankYouModal } from "./confirmation";

const Transactions = () => {
  const [alertOpen, setOpen] = useState(true);
  const [isModalOpen, setModalOpen] = useState(true);
  const closeAlert = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClose = () => setModalOpen(false);
  return (
    <>
      <ThankYouModal handleClose={handleClose} isOpen={isModalOpen} />
      {/* popover with timestamp */}
      <PopoverAlert handleClose={closeAlert} isOpen={alertOpen} status="info">
        <div className="flex flex-col space-y-2 px-4">
          <p>09:01</p>
          <p>Transaction submitted to the blockchain.</p>
          <p>You will receive an email from DirectEd</p>
        </div>
      </PopoverAlert>
      <div className="mx-auto mt-7 flex w-1/2 flex-col">
        <p className="text-2xl font-bold">Transactions</p>
      </div>
    </>
  );
};
export default Transactions;
