import { createReducer } from "@reduxjs/toolkit";
import userActions from '../actions/userActions'

const { sign_in } = userActions;

const inicialState = {
    id: "",
    name: "",
    lastName: "",
    photo: "",
    age: "",
    country: "",
    logged: false,
    role: "",
    token: "",
}

const userReducer = createReducer(inicialState,
    (builder) => {
        builder
            .addCase(sign_in.fulfilled, (state, action) => {
                //console.log('Carga de accion', action.payload.response)
                const { success, response } = action.payload
                if (success) {
                    let { user, token } = response
                    /* console.log(user); */

                    localStorage.setItem('token', JSON.stringify({ token: { user: token } }))
                    let newState = {
                        ...state,
                        name: user.name,
                        id: user.id,
                        photo: user.photo,
                        logged: true,
                        role: user.role,
                        token: token
                    }
                    return newState
                } else {
                    return console.log('Error')
                }
            })
    })

export default userReducer