import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import InterviewForm from './InterviewForm';
import './InterviewDialog.css';

const InterviewDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = (data) => {
    console.log(data);
    handleClose();
  };

  return (
    <div>
      <Button className="schedule-button" onClick={handleClickOpen}>
        Schedule Interview
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="dialog-title">Schedule Interview</DialogTitle>
        <DialogContent className="dialog-content">
          <InterviewForm onSubmit={handleFormSubmit} />
        </DialogContent>
        <DialogActions className="dialog-actions">
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InterviewDialog;








