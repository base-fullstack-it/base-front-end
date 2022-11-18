import {apiSlice} from "../apiSlice";
import qs from "query-string";
import base64 from "base-64";

export const authApiSlice = apiSlice.injectEndpoints({
  // reducerPath: "authApiSlice",
  //shoulld in theory allow for content type in application json
  // baseQuery,
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query:(body: { username: string; password: string }) => ({
        url:'token',
        method:'POST',
        // headers: {
        //   'Authorization': `Basic ${base64.encode('appreciate:appreciate')}`,
        //   'Content-Type': 'application/x-www-form-urlencoded'
        // },
        // body: qs.stringify({
        //   grant_type:'password',
        //   username: body.username,
        //   password: body.password
        // }),
        headers: {
          // 'Authorization': `Basic ${base64.encode('appreciate:appreciate')}`,
          'Content-Type': 'application/json'
        },
        body
      })
    }),
    getAppAccessToken: builder.query<any,void>({
      query:() => ({
        url:'oauth/token',
        method:'POST',
        mode: 'cors',
        headers: {
          'Authorization': `Basic ${base64.encode('appreciate:appreciate')}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:'grant_type=client_credentials'
      })
    }),
    registerUser: builder.mutation({
      query: (body: {
        username: string;
        password: string;
      }) => {
        return {

          url: "register",
          method: "post",
          body: {...body},
        };
      },
    }),
  }),
});


export const { useLoginUserMutation, useRegisterUserMutation,useGetAppAccessTokenQuery } = authApiSlice;
