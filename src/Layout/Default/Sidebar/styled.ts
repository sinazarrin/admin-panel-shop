import { Drawer, styled } from "@mui/material";

export const sidebarContainer = styled(Drawer)(({ theme }) => ({
    lexShrink: 0,
    '& .MuiDrawer-paper': {
        width: 264,
        padding: 0
    },
    '& .MuiListItemButton-root':{
        textAlign: 'right'
    }
}))