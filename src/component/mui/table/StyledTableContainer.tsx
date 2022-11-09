import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";

export default ({children}:{children:JSX.Element}) => {

    return   <TableContainer
        style={{maxWidth: "85%"}}
        component={Paper}>
        <Table
            // sx={{ minWidth:500  }}
            aria-label="customized table">
            {children}
        </Table>
    </TableContainer>
}