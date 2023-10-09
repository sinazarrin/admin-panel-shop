import { styled } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
const drawerWidth = 240;
import { AppBarProps } from '.';

export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
    "& .MuiToolbar-root":{
        padding: '15px 35px',
        justifyContent: 'space-between',
    },
    background: '#fff',
    boxShadow: 'none',
    color: theme.palette.secondary.main,
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
}));