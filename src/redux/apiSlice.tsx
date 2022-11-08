import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {store} from "./store";
export type AppState = ReturnType<typeof store.getState>;
export const vers = "v1/";

const baseQuery = fetchBaseQuery(
    {
            mode:"cors",
            credentials: 'include',
            baseUrl:process.env.REACT_APP_API_URL //+ "v1/"
    })

export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery,
    endpoints: (builder)=>({})
})