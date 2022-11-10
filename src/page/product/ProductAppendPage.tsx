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
        console.log(values,'VALUESS');
        const formData = new FormData();
        if(values.file){
        formData.append('file', values.file);
        delete values.file;
        }
        const jsonBody = JSON.stringify(values);
        formData.append('meta-data', jsonBody);
        await mutation(formData);
    };
    return <>
        <ProductFormik
            alterProduct={updateAddProduct}
            isUpdateForm={false}
        />
    </>
}