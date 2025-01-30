import { Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation(); // Получение функции перевода
  
  return (
    <Stack component='footer' 
    sx={{paddingTop: 4, 
    paddingBottom: 4, 
    flexDirection: { sm: 'row'}, 
    justifyContent: {sm: 'space-between'},
    alignItems: {sm: 'center'},
    marginTop: 'auto'
    }} >

    <Typography variant='body2' color='text.secondary'>
      &copy; {new Date().getFullYear()} &laquo;movie-portal&raquo;<br/>
      {t('footer')} <br/>
      {t('footer2')}
      &#128516;
     </Typography>
    <Typography variant='h5' color='primary.main' >movie-portal</Typography>

    </Stack>
  )
}
