import { createReducer } from "@reduxjs/toolkit";
import userActions from '../actions/userActions'

const { sign_in, sign_up, sign_in_token, log_out } = userActions;

const inicialState = {
    perfiles: [],
    id: "",
    nombre: "",
    apellidos: "",
    foto: "",
    loggeado: false,
    token: ""
}

const userReducer = createReducer(inicialState,
    (builder) => {
        builder
            .addCase(sign_in.fulfilled, (state, action) => {
                const { success, response } = action.payload
                if (success) {
                    let { user, token } = response
                    localStorage.setItem('token', JSON.stringify({ token: { user: token } }))
                    let newUser = {
                        ...state,
                        nombre: user.nombre,
                        id: user._id,
                        foto: user.foto,
                        loggeado: true,
                        token: token,
                    }
                    return newUser
                } else {
                    return console.log('Error')
                }
            })

            .addCase(sign_up.fulfilled, (state, action) => {
                return {
                    ...state,
                    perfiles: action.payload
                }
            })

            .addCase(sign_in_token.fulfilled, (state, action) => {
                const { success, response } = action.payload
                if (success) {
                    let { user, token } = response
                    let newState = {
                        ...state,
                        nombre: user.nombre,
                        id: user.id,
                        foto: user.foto,
                        loggeado: true,
                        token: token,
                    }
                    return newState
                } else {
                    let newState = {
                        ...state,
                        messagge: response
                    }
                    return newState
                }
            })

            .addCase(log_out.fulfilled, (state, action) => {
                const { success, response } = action.payload
                
                if (success) {
                    localStorage.removeItem('token')
                    let newState = {
                        ...state,
                        name: '',
                        photo: '',
                        logged: false,
                        token: ''
                    }
                    return newState
                } else {
                    return console.log(response)
                }
            })
    })

export default userReducer