import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import type { IMenu } from './Sidebar.interface';

interface SidebarSettingsProps {
  className: string;
  menus: IMenu[];
}

export default function SidebarSettings({ className, menus }: SidebarSettingsProps) {
  return (
    <ul className={className}>
      {menus.map((menu) => (
        <Fragment key={menu.key}>
          {menu.url && (
            <Link to={menu.url}>
              <li className="sidebar-footer-settings-item" onClick={menu.action}>
                <div className="sidebar-footer-settings-item-icon">
                  <Icon library={menu.iconLibrary} name={menu.icon} />
                </div>
                <span className="sidebar-footer-settings-item-title">{menu.name}</span>
              </li>
            </Link>
          )}
          {!menu.url && (
            <li className="sidebar-footer-settings-item" onClick={menu.action}>
              <div className="sidebar-footer-settings-item-icon">
                <Icon library={menu.iconLibrary} name={menu.icon} />
              </div>
              <span className="sidebar-footer-settings-item-title">{menu.name}</span>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
}
