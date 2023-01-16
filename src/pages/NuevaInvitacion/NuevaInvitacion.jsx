import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userActions from '../../redux/actions/userActions'
import './NuevaInvitacion.css'

export default function NuevaInvitacion() {

  let { foto, nombre, apellidos, id } = useSelector(store => store.userReducer)

  useEffect(()=>{
    console.log(id)
  },[])

  return (
    <div id='containerNuevaInvitacion'>
      <h2 id='titulo-nuevaInvitacion'>Nueva Invitación</h2>
      <button id='button-crearInvitacion'>Crear Invitación</button>
    </div>
  )
}
