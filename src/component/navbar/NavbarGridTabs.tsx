import {Grid, Tab, Tabs} from "@mui/material";
import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import  {NavbarTabValuesI} from "../../hook/useNavbarTabValues";
import {NavbarTabValuesContext} from "../../context/NavbarTabValuesContextWrapper";

export default () => {
    const navbarTabValues = useContext<NavbarTabValuesI>(NavbarTabValuesContext);
    return (
            <Tabs
                indicatorColor={"primary"}
                textColor={"inherit"}
                value={navbarTabValues.values}
                onChange={(e, val) => navbarTabValues.handleValues(val)}
            >
                    <Tab component={Link} label={"Products"} to={"/product"} />
                    <Tab component={Link} label={"Add Product"} to={"/product/add"} />
                    <Tab component={Link} label={"Point Cloud Portal"} to={"/point_cloud"} />
            </Tabs>
    )
}