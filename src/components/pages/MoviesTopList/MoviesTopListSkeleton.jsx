import { Skeleton, Stack } from '@mui/material'
import React from 'react'

export default function MoviesTopListSkeleton() {
  return (
    <>
    <Stack flexDirection='row' sx={{mt: 2, mb: 2}}>
        <Skeleton 
            animation="wave" 
            variant="rectangular"                    
            sx={{marginRight: '15px',}}
            height= '32px' 
            width='40px'
        />
        <Skeleton 
            animation="wave" 
            variant="rectangular"                    
            height= '32px' 
            width='100px'
        />
    </Stack>
    <Stack
        direction='row'
        justifyContent='center'
        flexWrap='wrap'
    >   
    {Array(15).fill(null).map((_, ind) =>(
        <Stack key={ind}>
            <Skeleton 
                animation="wave" 
                variant="rectangular"                    
                sx={{ marginTop: '7px', marginRight: '3px',}}
                height= '322px' 
                width='215px'
            />
            <Skeleton 
                animation="wave" 
                variant="text"                 
            />
            <Skeleton 
                animation="wave" 
                variant="text"                 
            />  
        </Stack>
    ))}
    </Stack>

    </>
  )
}
