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
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const isSubmitDisabled = !!to && !amount && !isNaN(amount);

  const clearValuesPostSubmit = () => {
    setAmount(0);
    setTo("");
    setFrom("");
    setDescription("");
  };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      const response = await mockApiRequest({ to, from, amount, description });
      console.log("Success", response);
      alert("Success:" + JSON.stringify(response));
    } catch (error) {
      if (error.status === 400) {
        console.error("Bad Request:", error);
        alert("Error:" + JSON.stringify(error));
      } else if (error.status === 401) {
        console.error("Unauthorized:", error);
        alert("Error:" + JSON.stringify(error));
      } else {
        console.error("Server Error:", error);
        alert("Error:" + JSON.stringify(error));
      }
    } finally {
      clearValuesPostSubmit();
      setSubmitting(false);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Payment Details</DialogTitle>
      <DialogContent>
        <TextField
          style={{ marginBottom: 10 }}
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
          style={{ marginBottom: 10 }}
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
          style={{ marginBottom: 10 }}
          label="Amount"
          type="number"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          error={!!amount && isNaN(Number(amount))}
          helperText={!!amount && isNaN(Number(amount)) ? "Invalid Amount" : ""}
        />
        <TextField
          fullWidth
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
