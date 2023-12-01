import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    favItems: [],
    saved:0,
}

export const faviousSlice = createSlice({
    name:'fav',
    initialState,
    reducers: {
        addToFavious: (state, {payload}) => {
            const isExist = state.favItems.find((item) => item.id === payload.id)
            if(isExist){
                return state;
            }else {
                state.favItems = [...state.favItems , payload.favItems] 
                state.saved += 1
               
            }
        },
        removeFavious:(state,{payload}) => {
            state.favItems = state.favItems.filter((item)=> item.id !== payload.id)
            state.saved -= 1;
        }

    }
})

export const {addToFavious,removeFavious} = faviousSlice.actions
export default faviousSlice.reducer