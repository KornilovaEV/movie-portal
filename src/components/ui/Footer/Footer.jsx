import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
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
    Данный сайт создан Костенко Е.В. для итогового проекта<br/>
    по курсу &laquo;React-интенсив&raquo; от &laquo;Aston&raquo;	&#128516;
     </Typography>
    <Typography variant='h5' color='primary.main' >movie-portal</Typography>

    </Stack>
  )
}
