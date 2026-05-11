import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter,Routes, Route } from "react-router-dom";

import App from './App.jsx'
import Sample from './sample.jsx'
import Login from './auth/Login.jsx';
import Signup from './auth/Signup.jsx';
import Complaint from './complaint/complaint.jsx';
import Outpass from './outpass/outpass.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sample" element={<Sample />} />
      <Route path="/complaint" element={<Complaint />} />
      <Route path="/outpass" element={<Outpass />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> 
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
