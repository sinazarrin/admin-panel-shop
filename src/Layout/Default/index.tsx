import { useState } from 'react'
import Sidebar from './Sidebar'

const DefaultLayout = () => {
    const [open, setOpen] = useState<boolean>(true)

    const handleCloseSidebar = (): void => {
        setOpen(!open)
    }
    
    return (
        <div>
            <Sidebar open={open} />
        </div>
    )
}

export default DefaultLayout