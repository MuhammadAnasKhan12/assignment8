import * as React from "react";
import PropTypes from "prop-types";
import "./dashboard.css"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Route, Routes, useNavigate } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import MessageIcon from '@mui/icons-material/Message';
import WalletIcon from '@mui/icons-material/Wallet';
import AddHomeIcon from '@mui/icons-material/AddHome';
import Analyticss from "./Analytics";
import Calenders from "./Calender";
import Chats from "./Chat";
import Customer from "./Customer";
import Orderdetail from "./orderdetail";
import Orderlist from "./orderlist";
import Reviewss from "./Reviews";
import Wallet from "./wallet";
import { green } from "@mui/material/colors";

const drawerWidth = 240;

function DashboardPage(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [pagesArr, setPagesArr] = React.useState([
    {
      name: "Dashboard",
      route: "dashboard",
      icon: <AddHomeIcon />,
    },
    {
      name: "Order List",
      route: "orderlist",
      icon: <ReorderIcon />,
    },
    {
      name: "Order Detail",
      route: "orderdetail",
      icon: <DescriptionIcon />,
    },
    {
      name: "Customer",
      route: "customer",
      icon: <PersonIcon />,
    },
    {
      name: "Analytics",
      route: "analytics",
      icon: <InsertChartIcon />,
    },
    {
      name: "Reviews",
      route: "reviews",
      icon: <ModeEditIcon />,
    },
    {
      name: "Calender",
      route: "calender",
      icon: <CalendarMonthIcon />,
    },
    {
      name: "Chat",
      route: "chat",
      icon: <MessageIcon />,
    },
    {
      name: "Wallet",
      route: "wallet",
      icon: <WalletIcon />,
    },
  ]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();

  const openPage = (route) => {
    navigate(`/dashboard/${route}`);
  };

  const drawer = (
    <div>
      <Box sx={{
        padding: '20px 20px 10px ',
        margin:"0px 0px -70px"
      }}>
        <Typography>
          <h1>Sedap.</h1>
        </Typography>
        <Typography>
          <p >Modern Admin Dashboard</p>
        </Typography>
      </Box>
      <Toolbar />
      <Divider />
      <List>
        {pagesArr.map((x, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => openPage(x.route)}>
              <ListItemIcon>{x.icon ? x.icon : <MailIcon />}</ListItemIcon>
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Box>
          <input type="search" placeholder="search here" />
        </Box>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="analytics" element={<Analyticss />} />
          <Route path="calender" element={<Calenders />} />
          <Route path="chat" element={<Chats />} />
          <Route path="customer" element={<Customer />} />
          <Route path="orderdetail" element={<Orderdetail />} />
          <Route path="orderlist" element={<Orderlist />} />
          <Route path="reviews" element={<Reviewss />} />
          <Route path="wallet" element={<Wallet />} />
        </Routes>
      </Box>
    </Box>
  );
}

DashboardPage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashboardPage;
