import {Button} from "@mui/material";
import {useDeleteProductMutation} from "../../../redux/api_slice/productApiSlice";

export default ({id}:{id:string}) => {
    const [mutation] = useDeleteProductMutation();

    const handleClick = () => {
        const confirmation = window.confirm(" Are you sure you want to delete this product?");
        if(confirmation){
            mutation(id);
        }
    }

return <Button variant={"contained"} color={"warning"} onClick={handleClick}>DELETE</Button>
}