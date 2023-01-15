import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import userActions from './redux/actions/userActions'


//? Pages and Components 
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
