import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './sass/main.scss';
import App from './App';
import { getLanguage } from './locales';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className={`${getLanguage() === 'uz' ? 'uzActive' : ''}`}>
      <App />
    </div>
  </React.StrictMode>
);