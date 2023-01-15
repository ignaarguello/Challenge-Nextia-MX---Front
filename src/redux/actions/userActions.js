import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/api";


const sign_in = createAsyncThunk('sign_in', async (data) => {
    let url = `${BASE_URL}/auth/sign-in`
    try {
        let user = await axios.post(url, data)
        console.log('data desde action', data)
        return {
            success: true,
            response: user.data.response
        }
    } catch (error) {
        return {
            success: false,
            response: error.response.data.message
        }
    }
})

const sign_up = createAsyncThunk('sign_up', async (data) => {
    try {
        let user = await axios.post(`${BASE_URL}/auth/sign-up`, data)
        console.log('data desde action', data)
        return {
            success: true,
            response: user.data.response
        }
    } catch (error) {
        return {
            success: false,
            response: error.response.data.message
        }
    }
})


const userActions = {
    sign_in,
    sign_up,
}

export default userActions