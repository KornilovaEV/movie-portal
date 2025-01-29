import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function ErrorMessage() {
  return (
    <Box display='flex' flexDirection='colom' margin='auto' alignItems='center'  >
        <Typography variant='h6'>Произошла ошибка</Typography>
    
    </Box>
  )
}
