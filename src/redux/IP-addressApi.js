import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseUrl = "https://geo.ipify.org";
const ipAddressheader =  {
    apiKey:"at_DxKhQDNYe6ESfcHXgaFgMMEhGfqWR",
}

const createRequest = (url) => ({url, headers: ipAddressheader})

export const ipAddressApi = createApi({
    reducerPath: "ipAddressApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getDetails: builder.query({
           query: (ipAddress) => createRequest(`/api/v2/country,city?apiKey=${ipAddressheader.apiKey}&${ipAddress}`)  
        })
    })
})

export const { useGetDetailsQuery} = ipAddressApi