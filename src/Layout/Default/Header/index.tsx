import { Toolbar, Typography } from '@mui/material'
import * as Styled from './styled'

const Header = ({open}) => {
    return (
        <div>
            <Styled.AppBar position="fixed" open={open}>
                <Toolbar>
                </Toolbar>
            </Styled.AppBar>
        </div>
    )
}

export default Header