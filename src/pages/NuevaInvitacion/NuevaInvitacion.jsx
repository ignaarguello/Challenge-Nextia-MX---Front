import React from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import invitacionesActions from '../../redux/actions/invitacionesActions'
import './NuevaInvitacion.css'
import { useNavigate } from "react-router";
import Swal from 'sweetalert2';
import Layout from '../../layout/Layout'


export default function NuevaInvitacion() {

  let { id } = useSelector(store => store.userReducer)
  const { crear_invitacion } = invitacionesActions

  const invitadoRef = useRef()
  const entradaRef = useRef()
  const caducidadRef = useRef()
  const horaRef = useRef()

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleSubmit = async (event) => {

    event.preventDefault()

    const data = {
      invitado: invitadoRef.current?.value,
      fechaEntrada: entradaRef.current?.value,
      horaEntrada: horaRef.current?.value,
      caducidad: caducidadRef.current?.value,
      userId: id,
    }

    console.log(entradaRef)
  

    let res = await dispatch(crear_invitacion(data))

    if (res.payload.success) {
      Swal.fire({
        title: 'Excelente!',
        text: "Invitacion creada con exito!",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/home')
        }
      }
      )
    } else {
      Swal.fire({
        title: 'Error!',
        text: `${res.payload.response}`,
        icon: 'error'
      }
      )
    }
  }


  return (
    <Layout>
      <div id='containerNuevaInvitacion'>
        <h2 id='titulo-nuevaInvitacion'>Nueva Invitación</h2>
        <div id='container-Form__nuevaInvitacion'>
          <div className='containerInputs'>
            <label className='label__nuevaInvitacion'>Nombre del invitado:</label>
            <input type="text" id='input--name__nuevaInvitacion' className='input__nuevaInvitacion' placeholder='Nombre del invitado' ref={invitadoRef} />
          </div>
          <div className='containerInputs'>
            <label className='label__nuevaInvitacion'>Fecha de entrada:</label>
            <input type="date" className='input__nuevaInvitacion' ref={entradaRef} />
            <input type="time" className='input__nuevaInvitacion' required ref={horaRef}></input>
          </div>
          <div className='containerInputs'>
            <label className='label__nuevaInvitacion'>Fecha de caducidad:</label>
            <input type="date" className='input__nuevaInvitacion' ref={caducidadRef} />
          </div>
          <button id='button-crearInvitacion' onClick={handleSubmit}>Crear Invitación</button>
        </div>
      </div>
    </Layout>
  )
}
