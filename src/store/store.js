import {configureStore} from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/query'
import { ipAddressApi } from "../redux/IP-addressApi"


export  const store = configureStore({
    reducer: {
        [ipAddressApi.reducerPath]: ipAddressApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ipAddressApi.middleware)
})

setupListeners(store.dispatch)