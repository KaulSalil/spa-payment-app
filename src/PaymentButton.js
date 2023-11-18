import React, { useState } from "react";
import PaymentDialog from "./PaymentDialog";
const PaymentButton = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    console.log("dialog open");
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    console.log("dialog close");
    setDialogOpen(false);
  };

  return (
    <div>
      <button className="payment-button" onClick={handleDialogOpen}>
        Pay Now
      </button>
      <PaymentDialog open={dialogOpen} onClose={handleDialogClose} />
    </div>
  );
};
export default PaymentButton;
