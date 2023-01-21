import { createReducer } from "@reduxjs/toolkit";
import invitacionesActions from '../actions/invitacionesActions'

const { crear_invitacion, get_mis_invitaciones, delete_invitacion } = invitacionesActions


const initialState = {
    invitaciones: [],
    misInvitaciones: [],
    invitacionesDelete:[],
}


const invitacionesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(crear_invitacion.fulfilled, (state, action) => {
            /*  console.log(action); */
            return {
                ...state,
                invitaciones: action.payload,
            };
        })

        .addCase(get_mis_invitaciones.fulfilled, (state, action) => {
            /* console.log(action); */
            return {
                ...state,
                misInvitaciones: action.payload.response
            };
        })

        .addCase(delete_invitacion.fulfilled, (state, action) => {
            console.log(action);
            return {
                ...state,
                invitacionesDelete: action.payload.response
            };
        })
});


export default invitacionesReducer;
