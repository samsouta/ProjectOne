import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
    user:null,
    token:null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        addUser: (state,{payload}) =>{
            state.user = payload.user,
            state.token = payload.token
            Cookies.set("user",JSON.stringify(state.user));
            Cookies.set("token", state.token);
        },
        logOut: (state,{payload}) => {
            Cookies.remove("user"),
            Cookies.remove("token")
        }

        

    },
})

export const {addUser,logOut} = authSlice.actions

export default authSlice.reducer