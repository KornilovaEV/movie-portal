import { Skeleton, Stack, useMediaQuery } from '@mui/material'
import React from 'react'

export default function MoviesTopMainSkeleton() {
    const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <>
    <Stack flexDirection='row' sx={{mt: 2, mb: 2}}>
        <Skeleton 
            animation="wave" 
            variant="rectangular"                    
            sx={{marginRight: '15px',}}
            height= {isMobile ? '45px' :'32px'} 
            width= {isMobile ? '45px' :'40px'}
        />
        <Skeleton 
            animation="wave" 
            variant="rectangular"                    
            height= '38px' 
            width='100px'
        />
    </Stack>
    <Stack>
        <Skeleton 
            animation="wave" 
            variant="rectangular"   
            height= '35px' 
            width='97%'
        />
        {isMobile &&
        <>
        <Skeleton 
            animation="wave" 
            variant="rectangular"    
            sx={{mt: '5px',}}     
            height= '35px' 
            width='97%'
        />
        <Skeleton 
            animation="wave" 
            variant="rectangular" 
            sx={{mt: '5px',}}     
            height= '35px' 
            width='97%'
        />
        <Skeleton 
            animation="wave" 
            variant="rectangular"        
            sx={{mt: '5px',}}     
            height= '35px' 
            width='97%'
        />
        <Skeleton 
            animation="wave" 
            variant="rectangular"        
            sx={{mt: '5px',}}     
            height= '35px' 
            width='97%'
        />
        <Skeleton 
            animation="wave" 
            variant="rectangular"        
            sx={{mt: '5px',}}     
            height= '35px' 
            width='97%'
        />
        <Skeleton 
            animation="wave" 
            variant="rectangular"        
            sx={{mt: '5px',}}     
            height= '35px' 
            width='97%'
        />
        <Skeleton 
            animation="wave" 
            variant="rectangular"        
            sx={{mt: '5px',}}     
            height= '40px' 
            width='40%'
        />
        </>
        }
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
