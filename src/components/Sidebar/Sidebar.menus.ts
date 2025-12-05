import { ROUTER } from '../../utils/routers';
import type { IMenu } from './Sidebar.interface';

export const SIDE_MENUS: IMenu[] = [
  {
    key: 'dashboard',
    name: 'Dashboard',
    icon: 'MdDashboard',
    iconLibrary: 'md',
    url: ROUTER['dashboard']['url'],
  },
  {
    key: 'profile',
    name: 'Profile',
    icon: 'LuUserRoundCog',
    iconLibrary: 'lu',
    url: ROUTER['profile']['url'],
  },
  {
    key: 'settings',
    name: 'Settings',
    icon: 'LuSettings',
    iconLibrary: 'lu',
    url: ROUTER['settings']['url'],
  },
];

export const SIDE_MENUS_SETTINGS: IMenu[] = [
  {
    key: 'profile',
    name: 'Profile',
    icon: 'LuUserRoundCog',
    iconLibrary: 'lu',
    url: ROUTER['profile']['url'],
  },
  {
    key: 'settings',
    name: 'Settings',
    icon: 'LuSettings',
    iconLibrary: 'lu',
    url: ROUTER['settings']['url'],
  },
  {
    key: 'logout',
    name: 'Logout',
    icon: 'LuLogOut',
    iconLibrary: 'lu',
  },
];
