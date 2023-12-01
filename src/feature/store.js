import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './Api/authApi'
import authSlice from '../context/authSlice'
import { dbApi } from './Api/dbApi'
import addToCardSlice from '../context/addToCardSlice'
import faviousSlice from '../context/faviousSlice'
import userProfileSlice from '../context/userProfileSlice'
import searchSlice from '../context/searchSlice'
import categorySlice from '../context/categorySlice'
import { notiApi } from './Api/notiApi'
import checkOutSlice from '../context/checkOutSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    category: categorySlice,
    addtocard: addToCardSlice,
    fav: faviousSlice,
    userprofile: userProfileSlice,
    search: searchSlice,
    checkout: checkOutSlice,
    [authApi.reducerPath]: authApi.reducer,
    [dbApi.reducerPath]:dbApi.reducer,
    [notiApi.reducerPath]:notiApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, dbApi.middleware,notiApi.middleware),
})  

setupListeners(store.dispatch)

