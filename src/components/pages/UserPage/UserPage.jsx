import { Button, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import AppContext from '../../../context';
import { useTranslation } from 'react-i18next';

export default function UserPage() {
    const { t } = useTranslation(); // Получение функции перевода
  
    const {userItems, setUserItems, movieItems, setMovieItems} = useContext(AppContext);  

    useEffect(() => {
              localStorage.setItem('userItems', JSON.stringify(userItems));
          }, [userItems]);
    useEffect(() => {
      localStorage.setItem('movieItems', JSON.stringify(movieItems));
    }, [movieItems]);


    const onLogOutUser = () => {
        setUserItems(prevUsers => prevUsers.map(user => {
            if (user.session === true) {
              return { ...user, session: false, like: movieItems };
            }
            return user;
          }));
          setMovieItems([]);

    }

  return (
    <>
    <Typography margin='auto' variant='h3' textAlign='center'>{userItems.map(user => user.session && user.email) }
    </Typography>
    <Button onClick={onLogOutUser}>
      {t('logOut')}
    </Button>
    </>
  )
}
