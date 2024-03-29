import React from 'react'
import './MisInvitaciones.css'
import { useDispatch, useSelector } from "react-redux";
import invitacionesActions from '../../redux/actions/invitacionesActions'
import { useEffect } from 'react';
import Layout from '../../layout/Layout';
import ButtonModal from '../../components/Button-Modal/ButtonModal'
import { VscClose } from "react-icons/vsc";
import 'animate.css';


export default function MisInvitaciones() {
  const dispatch = useDispatch()
  const { get_mis_invitaciones, delete_invitacion } = invitacionesActions
  const { misInvitaciones, invitacionesDelete } = useSelector(store => store.invitacionesReducer)
  const { id } = useSelector(store => store.userReducer)


  useEffect(() => {
    dispatch(get_mis_invitaciones(id))
  }, [invitacionesDelete])

  console.log(misInvitaciones)

  return (
    <Layout>
      <div id='container-MisInvitaciones' >
        <h2 id='titulo-MisInvitaciones'>Mis invitaciones</h2>
        <div className='Barra-Left'></div>
        <h3 className='titulo-invitaciones-recientes'>Aqui se mostrarán tus invitaciones, mas próximas a la fecha...</h3>
        {misInvitaciones.length > 0 ?
          <div id='container-invitaciones' className='animate__animated animate__fadeIn'>
            {misInvitaciones?.map(element =>
              <div className='container-card_invitacion' key={element._id} >
                <div className='container-body-invitacion'>
                  <div className='container-invitado'>
                    <h2 className='subtitulo-invitado'> - Invitado -</h2>
                    <h2 className='nombre-invitado'>{element.invitado}</h2>
                    <h3 className='entrada-invitado'>Entrada: {element.fechaEntrada} / {element.horaEntrada} hs</h3>
                    <ButtonModal nombre={element.invitado} fecha={element.fechaEntrada} hora={element.horaEntrada} caducidad={element.caducidad} id={element._id} />
                  </div>
                  <div className='container-deleteInvitacion'>
                    <VscClose className='button-delete-invitacion' onClick={() => dispatch(delete_invitacion(element._id))} />
                  </div>
                </div>
              </div>
            )}
          </div>
          :
          <div id='container-invitaciones'>
            <h2 id='titulo-no-invitaciones-pendientes' className='animate__animated animate__fadeIn'>¡No tienes invitaciones pendientes!</h2>
          </div>
        }
      </div>
    </Layout>
  )
}
