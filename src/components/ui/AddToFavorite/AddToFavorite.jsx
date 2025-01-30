import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../../context';
import styles from './AddToFavorite.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red, grey } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';

export default function AddToFavorite({movie}) {
    const {userItems, movieItems, setMovieItems
    } = useContext(AppContext);
    const { t } = useTranslation();
    const [isFavorite, setIsFavorite] = useState(false);

      useEffect(() => {
          localStorage.setItem('movieItems', JSON.stringify(movieItems));
      }, [movieItems]);

      useEffect(() => {
          localStorage.setItem('userItems', JSON.stringify(userItems));
      }, [userItems]);

    const onAddToFavorite = () => {
      setIsFavorite(!isFavorite)
        try {
            const findItem = movieItems && movieItems.find((item) => item.kinopoiskId === movie.kinopoiskId);
            if (findItem){
                setMovieItems((prev) => prev.filter((item) => item.kinopoiskId !== movie.kinopoiskId));
                }
            else{
                setMovieItems((prev) => [...prev, movie]);
              }
        } 
        catch (error) {
            alert(t('likeError'));
            console.error(error);
        };
      };
      const style = movieItems && movieItems.some((item) => item.kinopoiskId === movie.kinopoiskId)
      ?
      { color: red[500] } :
      {color: grey[500] };
      
  return (
    <>
    <FavoriteIcon 
    onClick={onAddToFavorite}
    className={styles.favoriteIcon} 
    fontSize="large"  
      sx={{
          ...style
        }} 
    /> 
    </>
  )
}
