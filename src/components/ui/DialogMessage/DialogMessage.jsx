import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

export default function DialogMessage({ message, onClickAdd, open, setOpen}) {
    const { t } = useTranslation(); // Получение функции перевода

    const handleClose = () => {
        setOpen(false);
      };    
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {t('exit')  +  message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
      <Button onClick={() => {onClickAdd(); handleClose()}} autoFocus>
      {t('yes')}
        </Button>
        <Button onClick={handleClose}>{t('no')}</Button>
      </DialogActions>
    </Dialog>
    
  )
}

DialogMessage.propTypes = {
    message: PropTypes.string,
    onClickAdd: PropTypes.func,
    open: PropTypes.bool,
    setOpen: PropTypes.func,
}