import {Button} from "@mui/material";
import {useDeleteProductMutation} from "../../../redux/api_slice/productApiSlice";
import {ModalHookInterface} from "../../../hook/useModal";

export default ({id,modalValues}:{modalValues: ModalHookInterface,id:string}) => {
    const [mutation] = useDeleteProductMutation();

    const handleClick = () => {
        const confirmation = window.confirm(" Are you sure you want to delete this product?");
        if(confirmation){
            modalValues.toggle();
            mutation(id);
        }
    }

return <Button variant={"contained"} color={"warning"} onClick={handleClick}>DELETE</Button>
}