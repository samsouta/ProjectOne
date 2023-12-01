import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    products:[]
}

export const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers: {
        getSearch: (state, {payload}) =>{
            state.products = payload.searchProducts
        },
        removeSearch:(state, {payload}) => {
            state.products = payload.non
        }
    }
})
export const {getSearch,removeSearch} = searchSlice.actions
export default searchSlice.reducer