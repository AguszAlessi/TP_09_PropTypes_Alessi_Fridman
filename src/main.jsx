import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/TP08_Carrito_De_Compras_Alessi_Fridman">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
