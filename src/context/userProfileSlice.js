import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';


const initialState = {
    userName:"",
    profileImage: null
}

export const userProfileSlice = createSlice({
    name: 'userprofile',
    initialState,
    reducers: {
        addUserProfile:(state, {payload}) => {
            state.userName = payload.userName,
            state.profileImage = payload.profileImage
        
        }
    }
})
export const {addUserProfile} = userProfileSlice.actions
export default userProfileSlice.reducer
