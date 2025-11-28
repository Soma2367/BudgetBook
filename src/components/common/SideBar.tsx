import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { NavLink } from "react-router";
import type { CSSProperties } from "@mui/material/styles";

interface SideBarProps {
    drawerWidth: number,
    mobileOpen: boolean,
    handleDrawerTransitionEnd: () => void,
    handleDrawerClose: () => void
}

interface MenuItem {
    icon: React.ComponentType,
    text: string,
    path: string,

}

const SideBar = (
    {drawerWidth, mobileOpen, handleDrawerClose, handleDrawerTransitionEnd}: SideBarProps) => {

    const menuItems: MenuItem[] = [
        {icon: HomeIcon, text: "Home", path: '/'},
        {icon: AccountBalanceIcon, text: "月間履歴", path: '/report'},
    ]

    const baseLinkStyle: CSSProperties = {
        textDecoration: "none",
        color: "inherit",
        display: "block"    }

    const activeLinkStyle: CSSProperties = {
        backgroundColor: "rgba(0, 0, 0, 0.08)"
    }

    const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map((menuItem, index) => (
            <NavLink key={index} to={menuItem.path} style={({isActive}) => {
                return {
                    ...baseLinkStyle,
                    ...(isActive ? activeLinkStyle : {})
                };
            }}>
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <HomeIcon /> : <AccountBalanceIcon />}
              </ListItemIcon>
              <ListItemText primary={menuItem.text} />
            </ListItemButton>
          </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );
    return (
        <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true,
            },
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
    );
}

export default SideBar;