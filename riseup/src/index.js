import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './utils/AuthProvider';

import App from './App';



ReactDOM.render(
  <Router>
    <AuthProvider>
      <Routes>
        <Route path='/*' element={<App />}></Route>
      </Routes>
      
    </AuthProvider>
  </Router>,
  document.getElementById('root')
);
