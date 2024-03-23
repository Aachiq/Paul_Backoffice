import { Box, Grid } from "@mui/material";
import SideBar from "../../../common/components/SideBar";
import Header from "../../../common/components/Header";
import MenuFoodTabs from "./MenuFoodTabs";

export default function MenuFoodLayout() {
    return (
        <Box>
            <Grid container>
                <Grid item md={2}>
                    <SideBar />
                </Grid>
                <Grid item md={10} bgcolor={"#F0F0F0"}>
                    <Header />
                    <MenuFoodTabs/>
                </Grid>
            </Grid>
        </Box>
    )
}
