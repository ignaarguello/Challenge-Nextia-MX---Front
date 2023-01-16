import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/api";


const sign_in = createAsyncThunk('sign_in', async (data) => {
    let url = `${BASE_URL}/auth/sign-in`
    try {
        let user = await axios.post(url, data)
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

const sign_in_token = createAsyncThunk('sign_in_token', async(token)=>{
    let headers = {headers: {'Authorization' : `Bearer ${token}`}}
    try{
        let res = await axios.post(`${BASE_URL}/auth/token`,null, headers)
        console.log('signTOKEN', res)
        return {
            success: true,
            response: {
                user: res.data.response,
                token
            }
        }
    }catch(error){
        return { success:false, response:error.response.data.message}
    }
})

const log_out = createAsyncThunk('log_out', async(token)=>{
    let url = `${BASE_URL}/auth/sign-out`
    let headers = {headers: {'Authorization': `Bearer ${token}`}}

    try{
        let user = await axios.put(url, null, headers)
        
        return {
            success:true,
            response: user.data.message
        }

    }catch(error){
        /* console.log('Errorresponse', error.response) */
        return {
            success:false,
            response: error.response.data.message
        }
    }
    
})


const userActions = {
    sign_in,
    sign_up,
    sign_in_token,
    log_out
}

export default userActions