import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../../context';
import styles from './AddToFavorite.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red, grey } from '@mui/material/colors';

export default function AddToFavorite({movie}) {
    const {userItems, movieItems, setMovieItems
    } = useContext(AppContext);

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
            alert('Ошибка при добавлении в избранное');
            console.error(error);
        };
      };
      // const onAddTo = () => {
      //   setUserItems(prevUsers => prevUsers.map(user => {
      //       if (user.session === true) {
      //         return { ...user, like: movieItems };
      //       }
      //       return user;
      //     }));
    // }
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
