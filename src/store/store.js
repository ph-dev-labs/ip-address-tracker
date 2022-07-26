import {configureStore} from "@reduxjs/toolkit"
import { ipAddressApi } from "../redux/IP-addressApi"


export  const store = configureStore({
    reducer: {
        [ipAddressApi.reducerPath]: ipAddressApi.reducer,
    }
})