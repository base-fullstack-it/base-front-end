import {apiSlice} from "../apiSlice";
import {Product} from "../../model/Product.model";
import {ProductFormValuesInterface} from "../../component/product/ProductFormik";

const apiWithTag = apiSlice.enhanceEndpoints({addTagTypes: ['Product']})
////    readonly id: string;
// //     readonly name: string;
// //     readonly info: string;
// //     readonly reference_number: string;
// //     readonly country: string;
export const productApiSlice = apiWithTag.injectEndpoints(
    {
    endpoints: (builder) => ({
        products: builder.query<Product[], void>({
            query: () => ({
                url: "product",
            }),
            providesTags: ["Product"],
        }),
        product: builder.query<Product, string>({
            query: (id) => `product/${id}`,
            providesTags: ["Product"],
        }),
        presignedProductUrl: builder.query<string, string>({
            query: (imageLocation) => ({
                url: `product/${imageLocation}`,
                // This is the same as passing 'text'
                responseHandler: (response) => response.text(),
            }),
        }),
        presignedFileProductUrl: builder.query<string, string>({
            query: (imageLocation) => `product/getbyte/${imageLocation}`
        }),

        addProduct: builder.mutation({
                async queryFn(formData, _queryApi, _extraOptions, fetchWithBQ) {
                    // upload with multipart/form-data
                    // const formData = new FormData();
                    // formData.append('file', file);
                    // formData.append('meta-data', jsonBody);
                    const response = await fetchWithBQ({
                        url: 'product',
                        method: 'POST',
                        body: formData,
                    });
                    if (response.error) throw response.error;
                    return response.data ? { data: response.data } : { error: response.error };
                },
            invalidatesTags: ['Product'],

        }),



        updateProduct: builder.mutation<Product, Product>({
            query: ({ id, ...rest }) => ({
                url: `product/${id}`,
                method: "PATCH",
                body: rest,
            }),
            invalidatesTags: ["Product"],
        }),
        deleteProduct: builder.mutation<Product, string>({
            query: (id ) => ({
                url: `product/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Product"],
        }),

    }),
});

export const {
    useAddProductMutation,
    useProductsQuery,
    useDeleteProductMutation,
    usePresignedProductUrlQuery,
    usePresignedFileProductUrlQuery
} = productApiSlice;
