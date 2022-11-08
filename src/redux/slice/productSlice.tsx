import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {Product} from "../../model/Product.model";

export interface ProductState {
    product:Product | null;
}
//
const initialState: ProductState = {
    product:null
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getProducts: (
            state
        ) => {
            // state.res = action.payload.res;
        },
    },
});
//
export const selectProducts = (state: RootState) => state.product.product;
//
export const { getProducts } = productSlice.actions;
//
export default productSlice.reducer;
