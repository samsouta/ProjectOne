import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const notiApi = createApi({
    reducerPath: 'notiApi',
    baseQuery: fetchBaseQuery({baseUrl: `https://newsapi.org/v2/ `}),
    tagTypes: ['noti'],
    endpoints: (builder) => ({
        getNewProducts: builder.query({
            query: ()=> `everything?q=clothes design&from=2023-11-11&to=2023-11-11&sortBy=popularity&apiKey=1e8a97434b3542daa576099b280a092f`,
            providesTags: ['noti']

        })
    })
})

export const { useGetNewProductsQuery} = notiApi