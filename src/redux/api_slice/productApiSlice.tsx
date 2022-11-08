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
                params: { start:"STARTER", end:"ENDER" }
            }),
            providesTags: ["Product"],
        }),
        product: builder.query<Product, string>({
            query: (id) => `product/${id}`,
            providesTags: ["Product"],
        }),
        addProduct: builder.mutation<{}, ProductFormValuesInterface>({
            query: (product) => ({
                url: "product",
                method: "POST",
                body: product,
            }),
            invalidatesTags: ["Product"],
        }),

        updateProduct: builder.mutation<Product, Product>({
            query: ({ id, ...rest }) => ({
                url: `product/${id}`,
                method: "PATCH",
                body: rest,
            }),
            invalidatesTags: ["Product"],
        }),
    }),
});

export const {
    useAddProductMutation
} = productApiSlice;
