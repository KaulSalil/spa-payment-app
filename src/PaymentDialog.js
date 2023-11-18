import React, { useState } from "react";
const PaymentDialog = ({ open, onClose }) => {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("USD");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className={`payment-dialog ${open ? "open" : ""}`}>
      <div className="dialog-content">
        <h2>Payment Details</h2>
        <label htmlFor="to">To:</label>
      </div>
    </div>
  );
};
export default PaymentDialog;
