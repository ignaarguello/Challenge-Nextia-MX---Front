import { createReducer } from "@reduxjs/toolkit";
import invitacionesActions from '../actions/invitacionesActions'

const { crear_invitacion } = invitacionesActions


const initialState = {
    invitaciones: [],
}

const invitacionesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(crear_invitacion.fulfilled, (state, action) => {
            console.log(action);
            return {
                ...state,
                invitaciones: action.payload,
            };
        })
});


export default invitacionesReducer;
