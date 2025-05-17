import React, { useState } from "react";
import { Button } from "./button";
// @ts-ignore
import Cross from "../../assets/cross.svg?react";

interface BookingCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingCode: string;
}

export const BookingCodeModal: React.FC<BookingCodeModalProps> = ({
  isOpen,
  onClose,
  bookingCode,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bookingCode);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-[90%] max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Booking Code</h2>
          <button onClick={onClose} className="p-2">
            <Cross />
          </button>
        </div>
        <div className="text-center mb-6">
          <p className="text-3xl font-bold tracking-wider">{bookingCode}</p>
        </div>
        <div className="flex flex-col gap-3">
          <Button
            variant="primary"
            size="large"
            title={isCopied ? "COPIED" : "COPY"}
            fullwidth
            onClick={handleCopy}
          />
          <Button
            variant="secondary"
            size="large"
            title="CONTINUE"
            fullwidth
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
};
