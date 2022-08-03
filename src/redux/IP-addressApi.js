import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseUrl = "https://geo.ipify.org";
const apiKey = "at_DxKhQDNYe6ESfcHXgaFgMMEhGfqWR"



export const ipAddressApi = createApi({
    reducerPath: "ipAddressApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getIp: builder.query({
           query: () => `/api/v2/country,city?apiKey=${apiKey}`,  
        }),
        getInputIp: builder.query({
            query: (ip) => `/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`
        })
    })
})

export const { useGetIpQuery, useGetInputIpQuery} = ipAddressApi