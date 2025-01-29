import { Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

export default function ErrorMessage() {
  return (
    <Stack display='flex' flexDirection='colom' margin='auto' alignItems='center' >
        <Typography textAlign='center' variant='h3'>Такой страницы не существует</Typography>
        <Button sx={{marginTop: '30px'}} variant="outlined" href='/'>Вернуться на главную</Button>
    </Stack>
  )
}
