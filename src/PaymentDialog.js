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
};
