import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import StyledTableContainer from "../mui/table/StyledTableContainer";
import useModal from "../../hook/useModal";
import {Product} from "../../model/Product.model";
import {StyledTableCell} from "../mui/table/StyledTableCell";
import {StyledTableRow} from "../mui/table/StyledTableRow";
import {v4 as uuidv4} from "uuid";
import {useEffect, useState} from "react";
import ProductDialog from "./ProductDialog";
import {CardMedia, Typography} from "@mui/material";
import SelectedProductDetailDialog from "./detail/SelectedProductDetailDialog";
export const API_HOST = process.env.REACT_APP_API_URL;

// export const getImage = (filename: string) =>
//     API_HOST + `${filename}?access_token=${localStorage.getItem("user").a.token}`;
export default ({products}: {
    products: ReadonlyArray<Product> | undefined
}) => {
    if(typeof products === 'undefined')  return null;
    const modalValues = useModal();
    const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
    useEffect(()=>{
        if(typeof products === 'undefined') return;
    },[products])

    useEffect(()=>{
        if(modalValues.visible == false) setSelectedProduct(undefined);
        const p = products.find(x => x.id == modalValues.modalId)
        // console.log(products,'pp')
        // console.log(modalValues,'pp')
        setSelectedProduct(
            p!
        )

    },[modalValues.visible])


    return (
        <>
            <StyledTableContainer>
                <>
                    <TableHead>
                        <TableRow>
                                <StyledTableCell align="left">Id</StyledTableCell>
                                <StyledTableCell align="left">Date</StyledTableCell>
                                <StyledTableCell align="left">Name</StyledTableCell>
                                <StyledTableCell align="left">Info</StyledTableCell>
                                <StyledTableCell align="left">Reference Number</StyledTableCell>
                                <StyledTableCell align="left">Country</StyledTableCell>
                                {/*<StyledTableCell align="left">Image</StyledTableCell>*/}
                                {/*<StyledTableCell align="left">File</StyledTableCell>*/}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <StyledTableRow style={{cursor: 'pointer'}}
                                            onClick={() => modalValues.handleModalId(String(row.id))} key={uuidv4()}>
                                <StyledTableCell align="left">{row.id}</StyledTableCell>
                                <StyledTableCell align="left">{row.date}</StyledTableCell>
                                <StyledTableCell align="left">{row.name}</StyledTableCell>
                                <StyledTableCell align="left">{row.info}</StyledTableCell>
                                <StyledTableCell align="left">{row.referenceNumber}</StyledTableCell>
                                <StyledTableCell align="left">{row.country}</StyledTableCell>
                                {/*<StyledTableCell align="left">{row.image}</StyledTableCell>*/}
                                {/*<StyledTableCell align="left">{row.file}</StyledTableCell>*/}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </>
            </StyledTableContainer>

            {modalValues.visible && selectedProduct && <ProductDialog modalValues={modalValues}>
                <SelectedProductDetailDialog selectedProduct={selectedProduct}/>
            </ProductDialog>
            }
        </>
    );
}
