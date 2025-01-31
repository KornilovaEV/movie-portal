import { Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function ErrorMessage() {
    const { t } = useTranslation();
  
  return (
    <Stack display='flex' flexDirection='colom' margin='auto' alignItems='center' >
        <Typography textAlign='center' variant='h3'>{t('errorMessage')}</Typography>
        <Button sx={{marginTop: '30px'}} variant="outlined"  to='/' component={Link} >{t('errorMessageToHome')}</Button>
    </Stack>
  )
}
