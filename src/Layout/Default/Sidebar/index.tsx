import {  Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import sidebarItems from "./list";
import * as Styled from './styled'

type sidebarProps = {
    open: boolean
}

const Sidebar = ({ open }: sidebarProps) => {
    return (
        <Styled.sidebarContainer
            anchor="right"
            open={open}
            variant="persistent"
        >
            <List>
                {
                    sidebarItems?.map((item, i) => (
                        <ListItem key={i} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    
                                </ListItemIcon>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Styled.sidebarContainer>
    )
}

export default Sidebar