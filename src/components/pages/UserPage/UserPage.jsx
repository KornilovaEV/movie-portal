import { Button } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import AppContext from '../../../context';

export default function UserPage() {
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
    <div>UserPage</div>
    <Button 
            sx={{
              marginTop: '25px'
            }} 
            onClick={onLogOutUser}
          >Выйти с аккаунта?</Button>
    </>
  )
}
