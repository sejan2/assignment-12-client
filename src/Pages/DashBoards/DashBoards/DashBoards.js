
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {

    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../Hooks/useAuth';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import AddRating from '../AddRating/AddRating';
import Payment from '../Payment/Payment';
import AddProduct from '../AddProduct/AddProduct';
import AllProducts from '../AllProducts/AllProducts';
import PaymentStripe from '../PaymentsStripe/PaymentStripe';


const drawerWidth = 200;

function DashBoards(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: 'none' }} to="/"><Button color="inherit">Home</Button></Link><br />
            <Link style={{ textDecoration: 'none' }} to={`${url}`}><Button color="inherit">MyOrder</Button></Link><br />
            <Link style={{ textDecoration: 'none' }} to={`${url}/addRating`}><Button color="inherit">Your Rating</Button></Link><br />
            <Link style={{ textDecoration: 'none' }} to={`${url}/payment`}><Button color="inherit">Pay</Button></Link><br />
            {admin && <Box>
                <Link style={{ textDecoration: 'none' }} to={`${url}/addProduct`}><Button color="inherit">Add a Product</Button></Link><br />
                <Link style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link><br />
                <Link style={{ textDecoration: 'none' }} to={`${url}/allOrder`}><Button color="inherit">Manage All Order</Button></Link><br />
                <Link style={{ textDecoration: 'none' }} to={`${url}/manageAllProduct`}><Button color="inherit">Manage Products</Button></Link>

            </Box>}

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashBoardHome></DashBoardHome>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/Payments/:appointmentId`}>
                        <PaymentStripe></PaymentStripe>
                    </Route>
                    <Route path={`${path}/allOrder`}>
                        <ManageAllProducts></ManageAllProducts>
                    </Route>
                    <Route path={`${path}/addRating`}>
                        <AddRating></AddRating>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/manageAllProduct`}>
                        <AllProducts></AllProducts>
                    </Route>

                </Switch>

            </Box>
        </Box>
    );
}

DashBoards.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashBoards;






























