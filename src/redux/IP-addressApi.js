import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseUrl = "https://geo.ipify.org";
const apiKey = "at_DxKhQDNYe6ESfcHXgaFgMMEhGfqWR"



export const ipAddressApi = createApi({
    reducerPath: "ipAddressApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getDetails: builder.query({
           query: (ipAddress) => `/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`,  
        })
    })
})

export const { useGetDetailsQuery} = ipAddressApi