import { Button, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../../context';
import { useTranslation } from 'react-i18next';
import DialogMessage from '../../ui/DialogMessage';
export default function UserPage() {
    const { t } = useTranslation(); // Получение функции перевода
    const [openMessageExitAcc, setOpenMessageExitAcc] = useState(false);
    const handleClickOpenMessageExitAcc = () => {
      setOpenMessageExitAcc(true);
    };
   
    const [openMessageDeleteAcc, setOpenMessageDeleteAcc] = useState(false);
    const handleClickOpenMessageDeleteAcc = () => {
      setOpenMessageDeleteAcc(true);
    };
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

    const onDeleteUser = () => {
      setUserItems(prevUsers => prevUsers.filter(user => 
        user.session !== true))
        setMovieItems([]);
    }

  return (
    <>
    <Typography margin='auto' variant='h3' textAlign='center'>{userItems.map(user => user.session && user.email) }
    </Typography>
    <Button  onClick={handleClickOpenMessageExitAcc}> 
      {t('logOut')}
    </Button>
    < DialogMessage message={t('logOut')} onClickAdd={onLogOutUser} open={openMessageExitAcc} setOpen={setOpenMessageExitAcc}/>
    <Button  onClick={handleClickOpenMessageDeleteAcc}> 
      {t('deleteAcc')}
    </Button>
    < DialogMessage message={t('deleteAcc')} onClickAdd={onDeleteUser} open={openMessageDeleteAcc} setOpen={setOpenMessageDeleteAcc}/>
    </>
  )
}
