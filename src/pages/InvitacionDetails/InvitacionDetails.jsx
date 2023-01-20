import React from 'react'
import './InvitacionDetails.css'
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../api/api';
import { useParams } from 'react-router-dom';
import axios from 'axios'

export default function InvitacionDetails() {
  let { id } = useParams()
  let [invitacionFind, setInvitacionFind] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}/invitaciones/?_id=${id}`)
      .then(response => setInvitacionFind(response.data.response[0]))
  }, [])

  console.log(invitacionFind)

  return (
    <div id='container-general-invitacion__details'>
      <h1 id='titulo-invitacion__details'>- Datos de la invitación -</h1>
      <div id='container-datos-invitacion__details'>
        <ul id='ul-container__details'>
          <div>
            <label className='label-invitacion__details'>Invitado:</label>
            <li className='li-items__details'>{invitacionFind.invitado}</li>
          </div>
          <div>
            <label className='label-invitacion__details'>Fecha y Hora de Ingreso:</label>
            <li className='li-items__details'>{invitacionFind.fechaEntrada}</li>
            <li className='li-items__details'>{invitacionFind.horaEntrada}</li>
          </div>
        </ul>
      </div>
      <div id='container-logo__details'>
        <a href="https://nextia.mx/" className='ref-logo__details'><img id='logo-netxia__details' src="https://nextia.mx/wp-content/uploads/2022/05/logo-nextia.png" alt="" /></a>
      </div>
    </div>
  )
}
