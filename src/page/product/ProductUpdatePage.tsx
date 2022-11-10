import ProductFormik, {ProductFormValuesInterface} from "../../component/product/ProductFormik";
import {useAddProductMutation} from "../../redux/api_slice/productApiSlice";
import {useLocation} from "react-router-dom";
import SelectedProductDetailCard from "../../component/product/detail/SelectedProductDetailCard";
import {useAppSelector} from "../../redux/hooks";
import { selectProduct} from "../../redux/slice/productSlice";
import SelectedProductDetailValueAggregate from "../../component/product/detail/SelectedProductDetailValueAggregate";

export default () => {
    // const {state} = useLocation();
    // const {selectedProduct} = state;
    const selectedProduct = useAppSelector(selectProduct);

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
        values.id = selectedProduct!.id;
        // if(values.country) delete values.country;
        const jsonBody = JSON.stringify(values);
        formData.append('meta-data', jsonBody);
        await mutation(formData);
    };
    return <>
        {/*{console.log(selectedProduct,"SELECTADO")}*/}
        {selectedProduct && <SelectedProductDetailValueAggregate selectedProduct={selectedProduct}/>}
        <ProductFormik
            alterProduct={updateAddProduct}
            isUpdateForm={true}
        />
    </>
}