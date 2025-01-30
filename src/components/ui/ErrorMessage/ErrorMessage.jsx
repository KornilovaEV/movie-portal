import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function ErrorMessage() {
    const { t } = useTranslation();
  return (
    <Box display='flex' flexDirection='colom' margin='auto' alignItems='center'  >
        <Typography variant='h6'>{t('error')}</Typography>
    
    </Box>
  )
}
