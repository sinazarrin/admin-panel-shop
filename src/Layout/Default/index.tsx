import { useState } from 'react'
import Sidebar from './Sidebar'
import { Toolbar, Typography } from '@mui/material'
import Header from './Header'

const DefaultLayout = () => {
    const [open, setOpen] = useState<boolean>(true)

    const handleCloseSidebar = (): void => {
        setOpen(!open)
    }

    return (
        <div style={{ display: 'felx' }}>
            <Header open={open}/>
            <Sidebar open={open} handleCloseSidebar={handleCloseSidebar} />
        </div>
    )
}

export default DefaultLayout