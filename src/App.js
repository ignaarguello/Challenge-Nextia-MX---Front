import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import userActions from './redux/actions/userActions'


//? Pages and Components 
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
