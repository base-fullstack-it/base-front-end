import ProductFormik, {ProductFormValuesInterface} from "../../component/product/ProductFormik";
import {SignupFormValuesInterface} from "../../component/auth/SignupFormik";

export default () => {
    const updateAddProduct = async (values:ProductFormValuesInterface) => {

    };
    return <>
        <ProductFormik
            alterProduct={updateAddProduct}
        />
    </>
}