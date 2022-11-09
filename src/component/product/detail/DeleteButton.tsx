import {Button} from "@mui/material";
import {useDeleteProductMutation} from "../../../redux/api_slice/productApiSlice";

export default ({id}:{id:string}) => {
    const [mutation] = useDeleteProductMutation();

return <Button variant={"contained"} color={"warning"} onClick={()=>mutation(id)}>DELETE</Button>
}