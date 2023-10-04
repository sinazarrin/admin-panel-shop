import logo from '../../../Assets/images/logo.png'
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import sidebarItems from "./list";
import * as Styled from './styled'
import LogoutIcon from '@mui/icons-material/Logout';

type sidebarProps = {
    open: boolean
}

const Sidebar = ({ open }: sidebarProps) => {
    return (
        <Styled.sidebarContainer anchor="right" open={open} variant="persistent">
            <Toolbar>
                <img src={logo} alt="" />
                <h1>ShopWave</h1>
            </Toolbar>
            <Divider />
            <List>
                {
                    sidebarItems?.map((item, i) => {
                        const CustomIcon = item.icon
                        return (
                            <ListItem key={i}>
                                <ListItemButton >
                                    <ListItemIcon>
                                        <CustomIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })
                }
                <Divider />
                <ListItem className='logout'>
                    <ListItemButton >
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary={'خروج'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Styled.sidebarContainer>
    )
}

export default Sidebar