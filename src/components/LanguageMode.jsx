import { IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';

  export default function LanguageMode() {
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'ru');
    const { i18n } = useTranslation();

    const toggleLanguageMode = () => {
      const newLanguage = language === 'ru' ? 'en' : 'ru';
      setLanguage(newLanguage);
      i18n.changeLanguage(newLanguage);
      localStorage.setItem('language', newLanguage);
    };

  return (
        <IconButton color="inherit" onClick={toggleLanguageMode}>
          <Typography>{language}</Typography>
          <LanguageIcon />
        </IconButton>
  );
}