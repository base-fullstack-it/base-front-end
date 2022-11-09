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
import {useEffect} from "react";
import ProductDialog from "./ProductDialog";
import {Typography} from "@mui/material";
export default ({product}: {
    product: ReadonlyArray<Product> | undefined
}) => {
    if(typeof product === 'undefined')  return null;
    useEffect(()=>{
        if(typeof product === 'undefined') return;
    },[product])
    const modalValues = useModal();
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
                        {product.map((row) => (
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
            {/*<ApolloLazyQueryDialogContext*/}
            {/*    modalValues={modalValues}*/}
            {/*    documentNode={GET_ORGANIZATION_DATA}*/}
            {/*>*/}
            {/*    <OrganizationDialogContent/>*/}
            {/*</ApolloLazyQueryDialogContext>*/}
            <ProductDialog modalValues={modalValues}>
                <Typography>I am present</Typography>
            </ProductDialog>
        </>
    );
}
