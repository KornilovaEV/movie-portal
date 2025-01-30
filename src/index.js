import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux'
import { store } from './app/store'
import 'bear-react-carousel/dist/index.css';
import ToggleColorMode from './components/ToggleColorMode';
import i18n from './components/i18n';
import LanguageMode from './components/LanguageMode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Provider store={store}>
      <ToggleColorMode>
        
        <CssBaseline />
        <App />
      </ToggleColorMode>
    </Provider>
);

   // Подключаем i18n к вашему приложению
   i18n.on('languageChanged', () => {
    document.documentElement.lang = i18n.language;
  });