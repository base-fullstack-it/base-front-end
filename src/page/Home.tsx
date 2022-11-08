import {Card, Container, Grid} from "@mui/material";

export default () => {

    return <Grid container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
        <Container maxWidth="lg">
            <Card
                // variant={"outlined"}
                raised
                sx={{
                    padding: "0.1em",
                }}
            >
                FROM HOME;
            </Card>
        </Container>
    </Grid>
}