import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Button, MenuItem, TextField } from "@mui/material";
const PaymentDialog = ({ open, onClose }) => {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("USD");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const isSubmitDisabled = !!to && !!from && !amount && isNaN(amount);

  const handleSubmit = async () => {
    setSubmitting(true);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Payment Details</DialogTitle>
      <DialogContent>
        <TextField
          label="To"
          fullWidth
          value={to}
          onChange={(e) => setTo(e.target.value)}
          error={!!to && !/^\S+@\S+\.\S+$/.test(to)}
          helperText={
            !!to && !/^\S+@\S+\.\S+$/.test(to) ? "Invalid email address" : ""
          }
        />
        <TextField
          label="From"
          select
          fullWidth
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="INR">INR</MenuItem>
        </TextField>
        <TextField
          label="Amount"
          type="number"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          error={!!amount && isNaN(Number(amount))}
          helperText={!!amount && isNaN(Number(amount)) ? "Invalid Amount" : ""}
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button></Button>
      </DialogActions>
    </Dialog>
  );
};

export default PaymentDialog;
