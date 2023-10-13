import { Drawer, styled } from "@mui/material";

export const sidebarContainer = styled(Drawer)(({ theme }) => ({
    '.MuiToolbar-root': {
        padding: '21px 35px',
        color: theme.palette.primary.main,
        fontSize: '12px',
        '& img': {
            width: 25,
            marginLeft: 10,
        },
    },
    '& .MuiDrawer-paper': {
        width: 240,
        padding: 0,
        background: '#fff',
        '& > ul > li': {
            paddingRight: 15,
            transition: 'all 0.5s',
            '&:hover':{
                transform: 'translateX(-10px)'
            },
            '& span':{
                fontSize: 14
            }
        }
    },
    '& .MuiListItemButton-root': {
        textAlign: 'right',
        borderRadius: 12,
    },
    '& .MuiListItemIcon-root': {
        minWidth: 38,
        '& svg': {
           
        },
    },
    '& .MuiDivider-root': {
    },
    '& .logout ': {
        color: '#d13946',
        '& svg': {
            color: '#d13946',
        }
    }
}))