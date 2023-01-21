import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import userActions from "./redux/actions/userActions";
import { useEffect } from 'react';



//? Pages and Components 
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import MisInvitacion from './pages/MisInvitaciones/MisInvitaciones';
import NuevaInvitacion from './pages/NuevaInvitacion/NuevaInvitacion'
import Info from './pages/Info'
import InvitacionDetails from './pages/InvitacionDetails/InvitacionDetails';

//? Importamos proteccion de rutas
import ProteccionRutas from './components/ProteccionRutas/ProteccionRutas'

function App() {
  let dispatch = useDispatch()
  let { loggeado } = useSelector(store => store.userReducer)

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem('token'))
    // console.log(token?.token.user);
    if (token) {
      dispatch(userActions.sign_in_token(token.token.user))
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} /> 
        <Route path="/invitacion-details/:id" element={<InvitacionDetails />} />    
        <Route element={<ProteccionRutas isAllowed={loggeado === false} reDirect={"/home"} />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
  
        <Routes>
          <Route element={<ProteccionRutas isAllowed={loggeado === true} reDirect={"/sign-in"} />}>
            <Route path="/home" element={<MisInvitacion />} />
            <Route path="/my-invitaciones" element={<MisInvitacion />} />
            <Route path="/new-invitacion" element={<NuevaInvitacion />} />
            <Route path="/info" element={<Info />} />
          </Route>
        </Routes>
     

    </>
  );
}


export default App;
