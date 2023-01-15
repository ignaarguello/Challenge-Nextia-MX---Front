import { createReducer } from "@reduxjs/toolkit";
import userActions from '../actions/userActions'

const { sign_in, sign_up } = userActions;

const inicialState = {
    perfiles: [],
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
                console.log('Action desde reductor sign-in', action.payload.response)
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

            .addCase(sign_up.fulfilled, (state, action)=>{
                console.log('action desde redcutor', action)
                return {
                    ...state,
                    perfiles: action.payload
                }
            })
    })

export default userReducer