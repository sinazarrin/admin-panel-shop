import { Drawer, styled } from "@mui/material";

export const sidebarContainer = styled(Drawer)(({ theme }) => ({
    '.MuiToolbar-root': {
        padding: '30px 30px 20px 0',
        color: theme.palette.primary.main,
        fontSize: '14px',
        '& img': {
            width: 25,
            marginLeft: 10,
        },
    },
    '& .MuiDrawer-paper': {
        width: 240,
        padding: 0,
        background: theme.palette.secondary.main,
        color: '#bdbdbd',
        '& > ul > li': {
            paddingRight: 15,
        }
    },
    '& .MuiListItemButton-root': {
        textAlign: 'right',
        borderRadius: 12,
        "&:hover": {
            background: '#2d2d2d'
        }
    },
    '& .MuiListItemIcon-root': {
        minWidth: 38,
        '& svg': {
            color: '#bdbdbd',
        },
    },
    '& .MuiDivider-root': {
        borderColor: '#353535'
    },
    '& .logout ': {
        color: '#d13946',
        '& svg': {
            color: '#d13946',
        }
    }
}))