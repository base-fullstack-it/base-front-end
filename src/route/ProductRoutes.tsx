import {Route, Routes} from "react-router-dom"
import ProductAppendPage from "../page/product/ProductAppendPage";
import ProductListPage from "../page/product/ProductListPage";

export default () => {
    return (
        <Routes>
            <Route index element={<ProductListPage/>} />
            <Route path="create_update" element={<ProductAppendPage/>}/>
        </Routes>
    )
}