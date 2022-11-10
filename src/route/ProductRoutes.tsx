import {Route, Routes} from "react-router-dom"
import ProductAppendPage from "../page/product/ProductAppendPage";
import ProductListPage from "../page/product/ProductListPage";
import ProductUpdatePage from "../page/product/ProductUpdatePage";

export default () => {
    return (
        <Routes>
            <Route index element={<ProductListPage/>} />
            <Route path="add" element={<ProductAppendPage/>}/>
            <Route path="update" element={<ProductUpdatePage/>}/>
        </Routes>
    )
}