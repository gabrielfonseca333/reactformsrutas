import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Cine from './components/Cine';
import Musica from './components/Musica';
import Router from './components/Router';

//por mi

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>INDEX PRINCIPAL</h1>
    <hr/>
    <Router />
    <hr/>
    <h2>Pie de Pagina</h2>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
