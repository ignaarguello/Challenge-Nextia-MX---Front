import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import QRCode from "react-qr-code";
import './ButtonModal.css'
import { Link } from 'react-router-dom';

export default function ButtonModal(props) {
  let { nombre, fecha, hora, caducidad, id } = props

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <>
      <Button variant="dark" onClick={handleShow} size="sm">
        Ver Detalles
      </Button>

      <Modal show={show} onHide={handleClose} id={id}>
        <Modal.Header closeButton className='header-modal'>
          <Modal.Title className='titulo-modal'>Detalles de Invitación</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-modal">
          <QRCode className='QR-CODE' value={`https://nextiafront.vercel.app/invitacion-details/${id}`} fgColor='#071431' />
          <h3 className='titulo-invitado__modal'>Invitado: {nombre}</h3>
          <h3 className='info-card__modal'>Entrada: {fecha}</h3>
          <h3 className='info-card__modal'>Hora de entrada: {hora} hs</h3>
          <h3 className='info-card__modal'>Caducidad: {caducidad}</h3>
        </Modal.Body>
        <Modal.Footer className='footer-modal'>
          <Button variant="dark" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

