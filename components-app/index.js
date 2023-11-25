import React from 'react';
import ReactDOM from 'react-dom/client';
import {Auth0Provider} from '@auth0/auth0-react'
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-c68jfj8c674xa3hs.us.auth0.com"
    clientId="4zENxO5ozbbmOW9eUpoCu5I13TXbGyeG"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
