import { IconButton, Stack, Typography } from '@mui/material';
import React, { createContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';

export default function LanguageMode() {
  const [language, setLanguage] = useState('ru');
    const { i18n } = useTranslation();
  
  useEffect(() => {
      const modeFromLocalStorage = localStorage.getItem('language');
      if (modeFromLocalStorage) {
        setLanguage(modeFromLocalStorage);
      } else {
        localStorage.setItem('language', 'ru');
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('language', language);
    }, [language]);

    const toggleLanguageMode = () => {
      setLanguage(prevState => (prevState === 'ru' ? 'en' : 'ru'));
      i18n.changeLanguage(language);
    };

  return (
        <IconButton color="inherit" onClick={toggleLanguageMode}>
            <Typography>{language}</Typography>
            <LanguageIcon />
        </IconButton>
  );
}