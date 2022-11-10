import PointCloudIframe from "../../component/point_cloud/PointCloudIframe";
import {Container, Typography} from "@mui/material";
export default () => {
    return (
        <Container style={{marginTop:20}}>
            <Typography style={{margin:10}}>
                Drag and drop a file in order to perform actions
            </Typography>
            <PointCloudIframe/>
        </Container>
    );
}