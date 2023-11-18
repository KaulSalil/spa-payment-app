import React, { useState } from "react";
import { Button } from "@mui/base";
import PaymentDialog from "./PaymentDialog";
const PaymentButton = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <Button color="primary" onClick={handleDialogOpen}>
        Pay Now
      </Button>
      <PaymentDialog open={dialogOpen} onClose={handleDialogClose} />
    </div>
  );
};
export default PaymentButton;
