import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'

const initialState = {
    card: 0,
    addedCard: [],
    qualtity: 0,
    totalAmount: 0

}

export const addToCardSlice = createSlice({
    name: 'addtocard',
    initialState,
    reducers: {
        addToCard: (state, { payload }) => {
            const isExist = state.addedCard?.find((item) => item.id === payload.addedCard.id)
            if (isExist) {
                return;
            } else {
                state.card += payload.card,
                state.addedCard = [...state.addedCard, { ...payload.addedCard, qualtity: 1 }]
                state.totalAmount += payload.price
            }
        },
        addItemQualtity: (state, { payload }) => {
            state.addedCard = state.addedCard.map((item) => {
                if (item.id === payload.id) {
                    return (
                        { ...item, qualtity: item.qualtity + 1 }
                    )
                } else {
                    return item;
                }
            })
            state.totalAmount += payload.price

        },
        removeItemQualtity: (state, { payload }) => {
            state.addedCard = state.addedCard.map((item) => {
                if (item.id === payload.id) {
                    return { ...item, qualtity: item.qualtity - 1 }
                } else {
                    return item;
                }
            })
            state.totalAmount -= payload.price

        },
        removeCard: (state, { payload }) => {
            state.addedCard = state.addedCard.filter((item) => item.id !== payload.id)
            state.card -= 1
            state.totalAmount -= payload.price * payload.qualtity
        },
    }

})

export const { addToCard, addItemQualtity, removeItemQualtity, removeCard } = addToCardSlice.actions
export default addToCardSlice.reducer