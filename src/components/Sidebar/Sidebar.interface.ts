import type { IconLibrary } from '../Icon/Icon';
import type { MENU_SIZE } from './Sidebar.constant';

export interface IMenu {
  key: string;
  name: string;
  icon: string;
  iconLibrary: IconLibrary;
  url?: string;
  menus?: IMenu[];
  action?: () => void;
}

export type TMenuSize = (typeof MENU_SIZE)[keyof typeof MENU_SIZE];
