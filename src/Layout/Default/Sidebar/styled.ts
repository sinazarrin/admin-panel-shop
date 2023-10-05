import { Drawer, styled } from "@mui/material";

export const sidebarContainer = styled(Drawer)(({ theme }) => ({
    '.MuiToolbar-root': {
        paddingRight: '30px',
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
        background: theme.palette.secondary.main,
        color: '#bdbdbd',
        '& > ul > li': {
            paddingRight: 15,
            '& span':{
                fontSize: 14
            }
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