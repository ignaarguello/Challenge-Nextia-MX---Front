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


const invitacionesActions = {
    crear_invitacion,
}

export default invitacionesActions