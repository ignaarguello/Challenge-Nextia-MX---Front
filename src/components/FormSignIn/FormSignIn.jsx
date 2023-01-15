import React from 'react'
import './FormSignIn.css'
import { useRef } from 'react'
import Swal from 'sweetalert2';
import { useDispatch } from "react-redux";
import userActions from '../../redux/actions/userActions'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function FormSignIn() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let { sign_in } = userActions

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = { correo: emailRef.current?.value, contraseña: passwordRef.current?.value }

        let res = await dispatch(sign_in(data))
        console.log(res)

        if (res.payload.success) {
            Swal.fire({
                title: 'Excellent!',
                text: "Login successful, thanks",
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('www.google.com')
                }
            }
            )
        } else {
            Swal.fire({
                title: 'Error!',
                text: `Wrong Login, Try again! - ${res.payload.response}`,
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
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://nextia.mx/wp-content/uploads/2022/05/logo-nextia.png"
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
                            Inicia Sesión
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Todo Sobre {' '}
                            <a href="https://nextia.mx/eugenia/" target='_blank' className="font-medium texto-rosa hover:text-indigo-500">
                                Eugenia
                            </a>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email"
                                    ref={emailRef}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Contraseña"
                                    ref={passwordRef}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium texto-rosa hover:text-indigo-500">
                                    ¿ Olvidaste tu contraseña ?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                className="group relative flex w-full justify-center rounded-md border border-transparent backgroundAzul py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
