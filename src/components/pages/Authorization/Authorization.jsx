import { Alert, Button,  Input, Stack } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../../context';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Authorization() {
  const {movieItems, setMovieItems, userItems, setUserItems} = useContext(AppContext);  
    const { t } = useTranslation();
  useEffect(() => {
      localStorage.setItem('userItems', JSON.stringify(userItems));
  }, [userItems]);
  useEffect(() => {
    localStorage.setItem('movieItems', JSON.stringify(movieItems));
  }, [movieItems]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState(t('emailNull'));
  const [passwordError, setPasswordError] = useState(t('passwordNull'));
  const [formValid, setFormValid] = useState(false);
  const [alertError, setAlertError] = useState(false);

  useEffect(() => {
    (emailError ||  passwordError) ?  setFormValid(false) : setFormValid(true)
  }, [emailError, passwordError])

  

  const onAutorizationUser = () => {
    setUserItems(prevUsers => prevUsers.map( user => {
      if (user.email === email && user.password === password){
        setEmail('');
        setPassword('');
        setMovieItems(user.like);
        return { ...user, session: true};
      } else {
            setAlertError(true);
            setPassword('')
      }
      return user;
    }))
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true); 
        break;
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(!re.test(String(e.target.value).toLocaleLowerCase())){
    setEmailError(t('emailIncorrect'))
  } else{
    setEmailError('')
  }
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  if(e.target.value.length > 8 || e.target.value.length < 3){
    setPasswordError(t('passwordIncorrect'))
    if(!e.target.value.length){
      setPasswordError(t('passwordNull'))
    }
  }
   else{
    setPasswordError('')
  }
  }

  return (
    <Stack alignItems='center'  >
        <h1>{t('logIn')}</h1>
      <Stack flexDirection='column' >
        {(emailError && emailDirty) && <div style={{color:'red'}}>{emailError}</div>}
        <Input 
          onChange={e => emailHandler(e)}
          value={email} 
          sx={{
            marginTop: '25px'
          }} 
          onBlur={e => blurHandler(e)} 
          name='email' 
          type='text' 
          placeholder={t('logEnter')}
        />
        {(passwordError && passwordDirty) && <div style={{color:'red'}}>{passwordError}</div>}
        <Input 
          onChange={e => passwordHandler(e)}
          value={password} 
          sx={{
            marginTop: '25px'
          }} 
          onBlur={e => blurHandler(e)} 
          name='password' 
          type='password' 
          placeholder={t('passwordEnter')}/>
        <Button 
          onClick={onAutorizationUser}
          disabled={!formValid}
          sx={{
            marginTop: '25px'
          }} 
        >{t('confirm')}</Button>
        {alertError && 
        <Alert variant="filled" severity="error" onClose={() => {setAlertError(false)}}>
            {t('errorAuthorization')}
        </Alert>
        }
        <Button 
        component={Link}
        to='/registration'
          sx={{
            marginTop: '25px'
          }} 
        >{t('registration')} </Button>
      </Stack>
    </Stack>
  )
}
