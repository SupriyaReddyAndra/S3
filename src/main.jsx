import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';
import './Global.css';
import { Provider } from 'react-redux';
import { store } from './Store';

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
        <App></App>
    </Provider>
  
);