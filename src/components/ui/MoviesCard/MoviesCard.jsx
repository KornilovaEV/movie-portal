import { Box, Rating, Stack, Tooltip, Link } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { Link as RouterLink} from 'react-router-dom'
import styles from './MoviesCard.module.css'
import AddToFavorite from '../AddToFavorite';
import AppContext from '../../../context';

export default function MoviesCard({movie}) {
  const {userItems} = useContext(AppContext);  

  useEffect(() => {
            localStorage.setItem('userItems', JSON.stringify(userItems));
        }, [userItems]);
  return (
      <Stack alignItems='center' sx={{ position: 'relative' }}>
        {
        userItems.some( user => user.session === true) && <AddToFavorite movie={movie}/>
        }
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
      </Stack>
  );
}
