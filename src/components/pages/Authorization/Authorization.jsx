import { Alert, Button,  Input, Stack } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../../context';

export default function Authorization() {
  const {movieItems, setMovieItems, userItems, setUserItems} = useContext(AppContext);  

  useEffect(() => {
            localStorage.setItem('userItems', JSON.stringify(userItems));
        }, [userItems]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
  const [formValid, setFormValid] = useState(false);
  const [alertError, setAlertError] = useState(false);

  useEffect(() => {
    (emailError ||  passwordError) ?  setFormValid(false) : setFormValid(true)
  }, [emailError, passwordError])

  useEffect(() => {
        localStorage.setItem('movieItems', JSON.stringify(movieItems));
    }, [movieItems]);

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
    setEmailError('Email не корректный')
  } else{
    setEmailError('')
  }
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  if(e.target.value.length > 8 || e.target.value.length < 3){
    setPasswordError('Пароль должен быть длинннее 3 и меньше 8 символов')
    if(!e.target.value.length){
      setPasswordError('Пароль не может быть пустым')
    }
  }
   else{
    setPasswordError('')
  }
  }

  return (
    <Stack alignItems='center'  >
        <h1>Войти в личный кабинет</h1>
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
          placeholder='Введите ваш email.....'
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
          placeholder='Введите ваш пароль.....'/>
        <Button 
          onClick={onAutorizationUser}
          disabled={!formValid}
          sx={{
            marginTop: '25px'
          }} 
        >Подтвердить</Button>
        {alertError && 
        <Alert variant="filled" severity="error" onClose={() => {setAlertError(false)}}>
            Проверьте правильность ввода пароля и/или лологина
        </Alert>
        }
        <Button 
        href='/registration'
          sx={{
            marginTop: '25px'
          }} 
        >Зарестрироваться</Button>
      </Stack>
    </Stack>
  )
}
