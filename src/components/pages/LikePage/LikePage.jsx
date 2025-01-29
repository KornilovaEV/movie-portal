import { Box, Rating, Stack, Tooltip, Link } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link as RouterLink} from 'react-router-dom'
import styles from '../../ui/MoviesCard/MoviesCard.module.css'
import AppContext from '../../../context';
import AddToFavorite from '../../ui/AddToFavorite';

export default function LikePage() {
  const {movieItems} = useContext(AppContext);

  useEffect(() => {
      localStorage.setItem('movieItems', JSON.stringify(movieItems));
  }, [movieItems]);
  

  return (
    <Stack  flexDirection='row'  flexWrap='wrap' justifyContent='center'>
  {movieItems.map(movie =>
  
    <Stack key={movie.kinopoiskId} alignItems='center' sx={{ position: 'relative' }}>
      <AddToFavorite movie={movie}/>
    
    <RouterLink to={`/movie/${movie.kinopoiskId || movie.filmId}`} >
      <img  src={movie.posterUrlPreview} alt={movie.nameRu} className={styles.img}/>
    </RouterLink>
    <Link component={RouterLink} to={`/movie/${movie.kinopoiskId || movie.filmId}`} className={styles.textTypography}>{movie.nameRu ? movie.nameRu : movie.nameEng }</Link>
    
    {movie.ratingKinopoisk && (
      <Stack>
        <Tooltip title={`${movie.ratingKinopoisk} / 10`}>
          <Box>
            <Rating name='read-only' value={movie.ratingKinopoisk /2} precision={0.1} readOnly/>
          </Box>
        </Tooltip>
      </Stack>
    )}
    </Stack>)}
  </Stack>


  )
}
