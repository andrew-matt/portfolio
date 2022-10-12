import * as React from 'react';
import { FC } from 'react';

import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import { setOpen } from 'common/components/snackbar/snackBar-reducer';
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackBar: FC = () => {
  const dispatch = useAppDispatch();

  const open = useAppSelector(state => state.snackBar.open);
  const error = useAppSelector(state => state.app.error);

  const title = error || 'Your message has been sent !';
  const severity = error ? 'error' : 'success';

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(setOpen(false));
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {title}
      </Alert>
    </Snackbar>
  );
};
