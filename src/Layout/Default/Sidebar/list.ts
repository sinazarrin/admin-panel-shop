import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import SettingsIcon from '@mui/icons-material/Settings';

export interface SidebarItems {
    icon: React.ElementType
    label: string
    path: string
}

const iconComponents: Record<string, React.ElementType> = {
    DashboardRoundedIcon,
    CategoryRoundedIcon,
    CardTravelIcon,
    PeopleAltRoundedIcon,
    MessageRoundedIcon,
    SettingsIcon
};

const sidebarItems:SidebarItems[] = [
    {
        icon: iconComponents['DashboardRoundedIcon'],
        label: 'داشبورد',
        path: '/',
    },
    {
        icon: iconComponents['CategoryRoundedIcon'],
        label: 'دسته بندی',
        path: '/categories',
    },
    {
        icon: iconComponents['CardTravelIcon'],
        label: 'سفارشات',
        path: '/orders',
    },
    {
        icon: iconComponents['PeopleAltRoundedIcon'],
        label: 'مشتریان',
        path: '/costumers',
    },
    {
        icon: iconComponents['MessageRoundedIcon'],
        label: 'پیام ها',
        path: '/messages',
    },
    {
        icon: iconComponents['SettingsIcon'],
        label: 'تنظیمات',
        path: '/setting',
    },
]

export default sidebarItems