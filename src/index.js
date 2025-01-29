import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux'
import { store } from './app/store'
import 'bear-react-carousel/dist/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>
);

