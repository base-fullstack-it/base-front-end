import ProductFormik, {ProductFormValuesInterface} from "../../component/product/ProductFormik";
import {SignupFormValuesInterface} from "../../component/auth/SignupFormik";
import {useLoginUserMutation} from "../../redux/api_slice/authApiSlice";
import {useAddProductMutation} from "../../redux/api_slice/productApiSlice";

export default () => {

    const [
        mutation,
        {
            data,
            isSuccess,
            isError,
            error,
        },
    ] = useAddProductMutation();

    const updateAddProduct = async (values:ProductFormValuesInterface) => {
        console.log(values,'VALUESS')
        // await mutation(values);
    };
    return <>
        <ProductFormik
            alterProduct={updateAddProduct}
        />
    </>
}