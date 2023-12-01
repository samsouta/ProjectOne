import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    addressResults:[],
    addressDone: 0
}

export const checkOutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        getAddressForm: (state,{payload})=>{
            state.addressResults = payload.addressData
            state.addressDone = payload.addressDone
        }
    }
})
export const {getAddressForm} = checkOutSlice.actions
export default checkOutSlice.reducer