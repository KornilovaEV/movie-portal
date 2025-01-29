import { Button, Input, Stack } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../../context';

export default function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordDouble, setPasswordDouble] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordDoubleDirty, setPasswordDoubleDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
    const [passwordDoubleError, setPasswordDoubleError] = useState('Пароли должны совпадать');
    const [formValid, setFormValid] = useState(false);
    const {userItems, setUserItems} = useContext(AppContext);  

    useEffect(() => {
              localStorage.setItem('userItems', JSON.stringify(userItems));
          }, [userItems]);

    useEffect(() => {
      (emailError ||  passwordError || passwordDoubleError) ?  setFormValid(false) : setFormValid(true)
    }, [emailError, passwordError, passwordDoubleError])
  
    const onRegistrationUser = () => {
        setUserItems((prev) => [...prev, {'email': email, 'password': password, 'session': true, 'like': [] }]);
        setEmail('');
        setPassword('');
        setPasswordDouble('');        
    };
    const blurHandler = (e) => {
      switch (e.target.name) {
        case 'email':
          setEmailDirty(true) 
          break;
        case 'password':
          setPasswordDirty(true) 
          break;
        case 'passwordDouble':
            setPasswordDoubleDirty(true) 
            break;
      }
    }
  
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
    const passwordDoubleHandler = (e) => {
        setPasswordDouble(e.target.value);
    if(e.target.value === password){
        setPasswordDoubleError('')
    }}

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
      }}
  
    return (
      <Stack alignItems='center'  >
          <h1>Регистрация личного кабинетa</h1>
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
            {(passwordDoubleError && passwordDoubleDirty) && <div style={{color:'red'}}>{passwordDoubleError}</div>}
            <Input 
              onChange={e => passwordDoubleHandler(e)}
              value={passwordDouble} 
              sx={{
                marginTop: '25px'
              }} 
              onBlur={e => blurHandler(e)} 
              name='passwordDouble' 
              type='passwordDouble' 
              placeholder='Введите повторно ваш пароль.....'/>
          <Button 
            disabled={!formValid}
            sx={{
              marginTop: '25px'
            }} 
            onClick={onRegistrationUser}
          >Подтвердить</Button>
          <Button 
          href='/autorization'
            sx={{
              marginTop: '25px'
            }} 
          >Есть аккаунт? Авторизоваться</Button>
        </Stack>
      </Stack>
    )
}
