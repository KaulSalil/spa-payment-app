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
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
