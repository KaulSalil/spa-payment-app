import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Button, MenuItem, TextField } from "@mui/material";
import { mockApiRequest } from "./api";
const PaymentDialog = ({ open, onClose }) => {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("USD");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const isSubmitDisabled = !!to && !amount && !isNaN(amount);

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      const response = await mockApiRequest({ to, from, amount, description });
      console.log("Success", response);
    } catch (error) {
      if (error.status === 400) {
        console.error("Bad Request:", error);
        // Display error message to the user
      } else if (error.status === 401) {
        console.error("Unauthorized:", error);
        // Redirect to login page (you can implement this part)
      } else {
        console.error("Server Error:", error);
        // Display error message to the user
      }
    } finally {
      setSubmitting(false);
      onClose();
    }
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
        <Button
          color="primary"
          onClick={handleSubmit}
          disabled={isSubmitDisabled || submitting}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PaymentDialog;
