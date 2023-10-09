import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { DrawerHeader, Main } from './styled';

const DefaultLayout = () => {
    const [open, setOpen] = useState<boolean>(true);

    const handleCloseSidebar = (): void => {

    };

    return (
        <>
            <Header open={open} />
            <Sidebar open={open} handleCloseSidebar={handleCloseSidebar} />
            <DrawerHeader/>
            <Main open={open}>
                 
            </Main>
        </>
    );
};

export default DefaultLayout;