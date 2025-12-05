import { Tooltip } from 'primereact/tooltip';
import { classNames } from 'primereact/utils';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import { MENU_SIZE } from './Sidebar.constant';
import type { IMenu, TMenuSize } from './Sidebar.interface';

interface SideMenuProps {
  menuSize: TMenuSize;
  menus: IMenu[];
}

interface MainMenuProps {
  menuSize: TMenuSize;
  menu: IMenu;
}

interface SubMenuProps extends SideMenuProps {
  menu: IMenu;
}

export default function SideMenu({ menus, menuSize }: SideMenuProps) {
  return (
    <ul className="sidebar-menus">
      {menus?.map((menu: IMenu) => (
        <Fragment key={menu.key}>
          {menu.url && (
            <Link to={menu.url}>
              <MainMenu menu={menu} menuSize={menuSize} />
            </Link>
          )}
          {!menu.url && <MainMenu menu={menu} menuSize={menuSize} />}
        </Fragment>
      ))}
    </ul>
  );
}

function MainMenu({ menu, menuSize }: MainMenuProps) {
  return (
    <>
      <li className={classNames('sidebar-menu', `${menu.key}-menu`)} data-bs-toggle="collapse" data-bs-target={`#${menu.key}`} aria-expanded="true" aria-controls={menu.key}>
        <div className="sidebar-menu-logo">
          <Icon library={menu.iconLibrary} name={menu.icon} className="sidebar-menu-logo-icon" />
        </div>
        <div className="sidebar-menu-info">
          <div className="sidebar-menu-info-title">{menu.name}</div>
        </div>
        {menu.menus?.length && (
          <div className="sidebar-menu-suffix">
            <Icon library="lu" name="LuChevronRight" className="sidebar-menu-suffix-icon" />
          </div>
        )}
        {menuSize === MENU_SIZE.SM && <Tooltip target={`.${menu.key}-menu`} content={menu.name} className="p-tooltip-sidebar" />}
      </li>
      {menu.menus?.length && <SubMenu menu={menu} menus={menu?.menus || []} menuSize={menuSize} />}
    </>
  );
}

function SubMenu({ menu, menus, menuSize }: SubMenuProps) {
  return (
    <ul className="sidebar-menus sidebar-menus-submenu accordion-collapse collapse" data-bs-parent="#sidebarAccordion" id={menu.key}>
      {menus.map((subMenu: IMenu) => (
        <li className={classNames('sidebar-menu', `${subMenu.key}-menu`)} key={subMenu.key}>
          <div className="sidebar-menu-logo">
            <Icon library={subMenu.iconLibrary} name={subMenu.icon} className="sidebar-menu-logo-icon" />
          </div>
          <div className="sidebar-menu-info">
            <div className="sidebar-menu-info-title">{subMenu.name}</div>
          </div>
          {menuSize === MENU_SIZE.SM && <Tooltip target={`.${subMenu.key}-menu`} content={subMenu.name} className="p-tooltip-sidebar" />}
        </li>
      ))}
    </ul>
  );
}
