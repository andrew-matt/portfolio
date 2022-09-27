import * as React from 'react';
import { FC } from 'react';

import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { AlertColor } from '@mui/material/Alert/Alert';
import Snackbar from '@mui/material/Snackbar';

type SnackBarType = {
  title: string;
  severity: AlertColor;
  open: boolean;
  setOpen: (value: boolean) => void;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackBar: FC<SnackBarType> = ({ title, severity, open, setOpen }) => {
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {title}
      </Alert>
    </Snackbar>
  );
};
