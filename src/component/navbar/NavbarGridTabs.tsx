import {Grid, Tab, Tabs} from "@mui/material";
import React, {useState} from "react";
import {Link} from "react-router-dom";

const links = [
    "product",
]
const link_label = [
    "product_label"
]
export default () => {
    const [value, setValue] = useState<string>();
    return (
            <Tabs
                indicatorColor={"primary"}
                textColor={"inherit"}
                value={value}
                onChange={(e, val) => setValue(val)}
            >
                    <Tab component={Link} label={"Products"} to={"/product"} />
                    <Tab component={Link} label={"Add Product"} to={"/product/add"} />
                    <Tab component={Link} label={"Point Cloud Portal"} to={"/point_cloud"} />
            </Tabs>
    )
}