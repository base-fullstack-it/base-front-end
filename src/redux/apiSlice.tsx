import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError} from "@reduxjs/toolkit/query/react";
import {store} from "./store";
import qs from "query-string";
export type AppState = ReturnType<typeof store.getState>;
export const vers = "v1/";

const baseQuery = fetchBaseQuery(
    {
            mode:"cors",
            credentials: 'include',
            baseUrl:process.env.REACT_APP_API_URL, //+ "v1/"

    })
const dynamicBaseQuery: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
    > = async (args, api, extraOptions) => {
    // console.log(args,'ARGS FROM DYNAMIC BASE QUERY')
    // const {params} = args;


    // console.log(api.getState(),'CALLED API GET STATE')

    const appState = api.getState() as AppState;

    const urlEnd = typeof args === 'string' ? args : args.url;
    // const params = instanceOfFetchArgs(args);
    // console.log(params,'PARAMISTA')


    if(urlEnd === "oauth/token") return baseQuery(args, api, extraOptions);

    // const queryParamsMap:any = params ? params : {};
    const queryParamsMap:any = {};
    queryParamsMap.access_token = appState.auth.token;
    const queryParamsString = qs.stringify(queryParamsMap);
    // const adjustedUrl = vers + urlEnd + "?" + queryParamsString;
    const adjustedUrl = urlEnd + "?" + queryParamsString;
    // console.log(adjustedUrl,'adjustedUrladjustedUrl')s
    const adjustedArgs = typeof args === 'string' ? adjustedUrl : { ...args, url: adjustedUrl }
    // console.log(adjustedArgs,'adjustedArgs FOR APP')
    return baseQuery(adjustedArgs, api, extraOptions)


}

export const apiSlice = createApi({
    reducerPath:'api',
    // baseQuery:dynamicBaseQuery,
    baseQuery,
    endpoints: (builder)=>({})
})