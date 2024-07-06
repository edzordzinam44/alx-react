import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Notiifications from './Notifications';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const notificationsRoot = ReactDOM.createRoot(document.getElementById('root-notifications'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Render the notifications component with React.StrictMode
<div>
notificationsRoot.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);
</div>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
