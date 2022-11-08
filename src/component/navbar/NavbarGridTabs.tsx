import {Grid, Tab, Tabs} from "@mui/material";
import React, {useState} from "react";
import {Link} from "react-router-dom";

const links = [
    "product",
    // "product",
    // "service",
    // "transaction",
    // "contact"
]
const link_label = [
    "product_label"
]
export default () => {
    const [value, setValue] = useState<string>();
    return (
        <Grid item xs={6}>
            <Tabs
                indicatorColor={"primary"}
                textColor={"inherit"}
                value={value}
                style={{fontWeight:"bold"}}
                onChange={(e, val) => setValue(val)}
            >
                {links.map((link, index) => (
                    <Tab component={Link} label={link} to={"/"+link} />
                ))}
            </Tabs>
        </Grid>
    )
}