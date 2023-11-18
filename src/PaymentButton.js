import React, { useState } from "react";
import { Button } from "@mui/base";
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
    </div>
  );
};
export default PaymentButton;
