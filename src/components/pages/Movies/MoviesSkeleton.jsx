import { Box, Grid, Skeleton, Stack, useMediaQuery } from '@mui/material'
import React from 'react'

export default function MoviesSkeleton() {
    const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Grid container spacing={2}>
        {!isMobile &&   
        <Grid item xs={2}>
            <Skeleton 
                animation="wave" 
                variant="rectangular"                    
                sx={{ marginTop: '10px',}}
                height= '400px' 
            />
        </Grid>
        }
        <Grid item xs={10}>
            <Box mt={2} mb={2}>
            {new Array(4).fill(null).map((_, ind) => (
                <React.Fragment key={ind}>
                    <Skeleton 
                        animation="wave" 
                        variant="rectangular" 
                        width='300px' 
                        height='32px' 
                    />
                <Stack direction='row' justifyContent='center' flexWrap='wrap' >
                    {new Array(4).fill(null).map((_, ind) => (
                        <Skeleton 
                            key={ind}
                            animation="wave" 
                            variant="rectangular"                    
                            sx={{ margin: '3px',}}
                            width={isMobile ? '300px' : '230px'} 
                            height={isMobile ? '520px' : '352px'} 
                        />
                    ))}
                </Stack>
                </React.Fragment>    
            ))}
            </Box>
        </Grid>
    </Grid>
  )
}
