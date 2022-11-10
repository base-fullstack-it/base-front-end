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
        setProduct: (
            state,
            action
        ) => {
            state.product = action.payload;
        },
    },
});
//
export const selectProduct = (state: RootState) => state.product.product;
//
export const { setProduct } = productSlice.actions;
//
export default productSlice.reducer;


