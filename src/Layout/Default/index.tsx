import { Suspense, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { DrawerHeader, Main } from './styled';
import { Outlet } from 'react-router-dom';

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
                 <Suspense fallback={'Loading ...'}>
                    <Outlet/>
                 </Suspense>
            </Main>
        </>
    );
};

export default DefaultLayout;