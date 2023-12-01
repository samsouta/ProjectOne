import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dbApi = createApi({
    reducerPath:'dbApi',
    baseQuery:fetchBaseQuery({baseUrl: `https://fakestoreapi.com/`}),
    tagTypes: ['db'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `products`,
            providesTags: ['db']
        }),
        detail: builder.query({
            query: (id) =>  `products/${id}`,
            providesTags: ['db']
        }),
        getCategory: builder.query({
            query: () => `products/categories`,
            providesTags: ['db']
        })


    })
})

export const {useGetProductsQuery,useDetailQuery,useGetCategoryQuery} = dbApi