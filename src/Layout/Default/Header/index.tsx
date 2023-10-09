import { TextField, Toolbar } from '@mui/material'
import * as Styled from './styled'
import Avatar from '../../../Components/general/Avatar'
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}
const Header = ({ open }: AppBarProps) => {
    return (
        <div>
            <Styled.AppBar position="fixed" open={open}>
                <Toolbar>
                    <MoreVertIcon/>
                    <Avatar size='medium' />
                </Toolbar>
            </Styled.AppBar>
        </div>
    )
}

export default Header