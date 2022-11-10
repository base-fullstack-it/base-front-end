import {Button} from "@mui/material";
import {useDeleteProductMutation} from "../../../redux/api_slice/productApiSlice";
import {ModalHookInterface} from "../../../hook/useModal";
import {useEffect} from "react";
import {toast} from "react-toastify";

export default ({id,modalValues}:{modalValues: ModalHookInterface,id:string}) => {
    const [mutation,
        {
            data,
            isSuccess,
            isError,
            error,
        }
    ] = useDeleteProductMutation();

    const handleClick = () => {
        const confirmation = window.confirm(" Are you sure you want to delete this product?");
        if(confirmation){
            mutation(id);
        }
    }
    useEffect(() => {
        if (isError) toast.error((error as any).data.message);
    }, [isError]);
    useEffect(() => {
        if (isSuccess) {
            toast.success("You have deleted this product");
            modalValues.toggle();
        }
    }, [isSuccess]);

return <Button variant={"contained"} color={"warning"} onClick={handleClick}>DELETE</Button>
}