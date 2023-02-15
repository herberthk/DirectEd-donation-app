import { FC, useState } from "react";
import { Button, Modal } from "../components";
import { ThankyouCard } from "../components/cards/Thankyou";
import { confData } from "../util/confirmation";
import { thankYou } from "../util/thankYou";

export interface ConfirmationProps {
  /**
   * Wallet address of the donor
   */
  address: string;
  /**
   * Script hash of the transaction
   */
  scriptHash: string;
  /**
   * ADH amount sent
   */
  ADAsent: number;
  /**
   * Token received from transaction
   */
  tokenReceived: string;
  /**
   * Total fees of the transaction
   */
  totalFees: number;
  /**
   * Deadline for transaction
   */
  deadLine: string;
}

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

export const ThankYouModal: FC<ModalProps> = ({ handleClose, isOpen }) => {
  return (
    <Modal
      handleClose={handleClose}
      isOpen={isOpen}
      size="xs"
      title={
        <p className="medium-text text-center text-2xl font-bold">
          Thank you for your donation to DirectEd{" "}
        </p>
      }
    >
      <ThankyouCard details={thankYou.details} school={thankYou.school} />
    </Modal>
  );
};
/**
 * Confirmation card
 */
const ConfirmationCard: FC<ConfirmationProps> = ({
  ADAsent,
  address,
  deadLine,
  scriptHash,
  tokenReceived: tokenRecieved,
  totalFees,
}) => {
  return (
    <div className="accent2 full-width mx-auto mt-4 flex w-1/2 flex-col space-y-8 rounded-md p-4 shadow-lg">
      <div className="flex-column flex">
        <p className="full-width w-1/3 text-lg font-bold">From address:</p>
        <p className="full-width break-all text-lg">{address}</p>
      </div>
      <div className="flex-column flex items-center">
        <p className="full-width w-1/3 text-lg font-bold">Script hash:</p>
        <p className="full-width break-all text-lg">{scriptHash}</p>
      </div>
      <div className="flex items-center">
        <p className="full-width w-1/3 text-lg font-bold">ADA sent:</p>
        <p className="full-width break-all text-lg">{ADAsent}</p>
      </div>
      <div className="flex-column flex items-center">
        <p className="full-width w-1/3 text-lg font-bold">Token received:</p>
        <p className="full-width break-all text-lg">{tokenRecieved}</p>
      </div>
      <div className="flex items-center">
        <p className="full-width w-1/3 text-lg font-bold">Total fees:</p>
        <p className="full-width break-all text-lg">{totalFees}</p>
      </div>
      <div className="flex items-center">
        <p className="full-width w-1/3 text-lg font-bold">Deadline:</p>
        <p className="full-width break-all text-lg">{deadLine}</p>
      </div>
    </div>
  );
};

const Confirmation = () => {
  const [processing, setProcessing] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const confirm = () => {
    if (clicked) {
      setIsOpen(true);
      setProcessing(false);
      setClicked(false);
    } else {
      setProcessing(true);
      setClicked(true);
    }
  };
  return (
    <>
      {/* Renders modal after confirmation */}
      <ThankYouModal handleClose={handleClose} isOpen={isOpen} />
      <div className="padding-0 mt-7 flex w-full flex-col p-7">
        <p className="medium-text mx-auto text-5xl font-bold capitalize">
          Confirmation{" "}
        </p>
        <ConfirmationCard
          ADAsent={confData.ADAsent}
          address={confData.address}
          deadLine={confData.deadLine}
          scriptHash={confData.scriptHash}
          tokenReceived={confData.tokenReceived}
          totalFees={confData.totalFees}
        />
        <Button
          onClick={confirm}
          text={processing ? "Processing" : "Confirm"}
          backgroundColor="primary"
          otherClasses="mx-auto mt-7"
        />
      </div>
    </>
  );
};

export default Confirmation;
