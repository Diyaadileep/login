import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Reg from './Reg';
import Lgn from './Lgn';
import { store } from './Store';

import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Reg />} />
          <Route path='/next' element={<Lgn />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>

);

reportWebVitals();
