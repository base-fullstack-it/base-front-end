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
        <Grid item xs={6}>

            {/*TODO RETURN TO THIS MUI ERROR*/}
            {/*<Tabs*/}
            {/*    indicatorColor={"primary"}*/}
            {/*    textColor={"inherit"}*/}
            {/*    value={value}*/}
            {/*    onChange={(e, val) => setValue(val)}*/}
            {/*>*/}
            {/*    {links.map((link, index) => (*/}
            {/*        <Tab component={Link} label={link} to={"/"+link} />*/}
            {/*    ))}*/}
            {/*</Tabs>*/}
        </Grid>
    )
}