import { Button, Input, Link, Stack } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../../context';
import { useTranslation } from 'react-i18next';

export default function Registration() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordDouble, setPasswordDouble] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordDoubleDirty, setPasswordDoubleDirty] = useState(false);
    const [emailError, setEmailError] = useState(t('emailNull'));
    const [passwordError, setPasswordError] = useState(t('passwordNull'));
    const [passwordDoubleError, setPasswordDoubleError] = useState(t('passwordEqual'));
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
      setEmailError(t('emailIncorrect'))
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
        setPasswordError(t('passwordIncorrect'))
        if(!e.target.value.length){
          setPasswordError(t('passwordNull'))
        }
      }
       else{
        setPasswordError('')
      }}
  
    return (
      <Stack alignItems='center'  >
          <h1>{t('registrationAccount')}</h1>
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
            placeholder= {t('logEnter')}
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
              placeholder={t('passwordEnter')} />
          <Button 
            disabled={!formValid}
            sx={{
              marginTop: '25px'
            }} 
            onClick={onRegistrationUser}
          >{t('confirm')}</Button>
          <Button 
        component={Link}
          to='/autorization'
            sx={{
              marginTop: '25px'
            }} 
          >{t('logInHaveAcc')}</Button>
        </Stack>
      </Stack>
    )
}
