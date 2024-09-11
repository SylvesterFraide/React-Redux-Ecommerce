import React from 'react'
import './App.css' 
import 'react-toastify/dist/ReactToastify.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

import NavBar from './components/NavBar'
import Home from './components/Home'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
    <NavBar />  
      <Routes>
        <Route path='cart' element={<Cart />}  />
        <Route path='*' element={<NotFound />} />
        <Route path='/' exact element={<Home />}  />   
      </Routes>
    </BrowserRouter>
  )
}

export default App;
