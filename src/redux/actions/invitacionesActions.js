import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/api";

const crear_invitacion = createAsyncThunk('crear_invitacion', async (data) => {
    let url = `${BASE_URL}/invitaciones`
    try {
        let invitacion = await axios.post(url, data)
        return {
            success: true,
            response: invitacion.data.response
        }
    } catch (error) {
        return {
            success: false,
            response: error.response.data.message
        }
    }
})

const get_mis_invitaciones = createAsyncThunk('get_mis_invitaciones', async (id) => {
    let url = `${BASE_URL}/invitaciones/?userId=${id}`
    try {
        let invitacion = await axios.get(url)
        return {
            success: true,
            response: invitacion.data.response
        }
    } catch (error) {
        return {
            success: false,
            response: error.response.data.message
        }
    }
})


const delete_invitacion = createAsyncThunk('delete_invitacion', async (id) => {
    let url = `${BASE_URL}/invitaciones/${id}`
    try {
        let invitacion = await axios.delete(url)
        console.log(invitacion)
        return {
            success: true,
            response: invitacion.data.response
        }
    } catch (error) {
        return {
            success: false,
            response: error.response.data.message
        }
    }
})


const invitacionesActions = {
    crear_invitacion,
    get_mis_invitaciones,
    delete_invitacion,
}

export default invitacionesActions