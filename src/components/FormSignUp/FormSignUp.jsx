import React from 'react'
import { useRef } from 'react'
import Swal from 'sweetalert2';
import { useDispatch } from "react-redux";
import userActions from '../../redux/actions/userActions'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function FormSignUp() {
    const nombreRef = useRef()
    const apellidosRef = useRef()
    const correoRef = useRef()
    const contraseñaRef = useRef()
    const fotoRef = useRef()
    const departamentoRef = useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    let { sign_up } = userActions

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {
            nombre: nombreRef.current?.value,
            apellidos: apellidosRef.current?.value,
            correo: correoRef.current?.value,
            contraseña: contraseñaRef.current?.value,
            foto: fotoRef.current?.value,
            departamento: departamentoRef.current?.value,
        }

        let res = await dispatch(sign_up(data))

        if (res.payload.success) {
            Swal.fire({
                title: 'Excelente!',
                text: "Tu usuario fue creado exitosamente",
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/sign-in')
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
        <div style={{ backgroundColor: '#0d0f19', }}>
            <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img className="mx-auto h-12 w-auto" src="https://nextia.mx/wp-content/uploads/2022/05/logo-nextia.png" alt="Your Company" />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
                            Registrarse
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Todo Sobre {' '}
                            <a href="https://nextia.mx/eugenia/" target='_blank' className="font-medium texto-rosa hover:text-indigo-500">
                                Eugenia
                            </a>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="-space-y-px rounded-md shadow-sm flex flex-col gap-y-5">
                            <div>
                                <input id="input-name_signUp" type="text" required className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Nombre" ref={nombreRef} />
                            </div>
                            <div>
                                <input id="input-apellidos_signUp" type="text" required className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Apellido" ref={apellidosRef} />
                            </div>
                            <div>
                                <input id="input-correo_signUp" type="email" required className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Correo" ref={correoRef} />
                            </div>
                            <div>
                                <input id="input-contraseña_signUp" type="password" required className="relative block w-full appearance-none rounded-md  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Contraseña" ref={contraseñaRef} />
                            </div>
                            <div>
                                <input id="input-foto_signUp" type="text" required className="relative block w-full appearance-none rounded-md  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Foto de perfil" ref={fotoRef} />
                            </div>
                            <div>
                                <input id="input-departamento_signUp" type="text" required className="relative block w-full appearance-none rounded-md  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Departamento" ref={departamentoRef} />
                            </div>
                        </div>
                        <div>
                            <button className="group relative flex w-full justify-center rounded-md border border-transparent backgroundAzul py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" >
                                Registrarse
                            </button>
                        </div>
                    </form>
                    <div className='flex items-center justify-center'>
                        <Link to='/sign-in' className="font-medium text-white hover:text-indigo-500">¿ Ya tienes cuenta ? Ingresá</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
