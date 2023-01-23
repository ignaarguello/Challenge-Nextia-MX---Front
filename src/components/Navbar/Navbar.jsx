import React from 'react'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import userActions from '../../redux/actions/userActions'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

  let navigate = useNavigate()
  let dispatch = useDispatch()
  let { log_out } = userActions
  let { token } = useSelector(store => store.userReducer)

  async function logout(event) {
    Swal.fire({
      title: 'Seguro quieres salir?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cerrar Sesion'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(log_out(token));
        navigate('/')
      }
    })
  }
  
  return (
    <div id='container-general__navbar'>
      <div id='container_items-nav'>
        <Link to='/my-invitaciones' className="item-nav">Mis Invitaciones</Link>
        <Link to='/new-invitacion' className="item-nav">Nueva Invitación</Link>
        <Link to='/info' className="item-nav">+Info</Link>
        <div className="item-nav__sign-out" onClick={logout}>- Cerrar Sesión -</div>
      </div>
      <div id='container-logo-nav'>
        <a href="https://nextia.mx/" className='ref-container-nav'><img id='logo-netxia-nav' src="../logo-nextia.png" alt="" /></a>
      </div>
    </div>
  )
}
