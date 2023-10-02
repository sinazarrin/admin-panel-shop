import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import sidebarItems from "./list";
import { useState } from "react";

type sidebarProps = {
    open: boolean
}

const Sidebar = ({ open }: sidebarProps) => {


    return (
        <Box>
            <Drawer
                sx={{
                    width: 264, lexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 264,
                    },
                }} 
                anchor="right" 
                open={open}
                variant="persistent"
            >
                <List>
                    {
                        sidebarItems?.map((item, i) => (
                            <ListItem key={i}>
                                <ListItemButton>
                                    <ListItemIcon>

                                    </ListItemIcon>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}

export default Sidebar