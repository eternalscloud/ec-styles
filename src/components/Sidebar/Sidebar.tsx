// import { useEffect, useLayoutEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// // import { dispatchCurrentUser, useCurrentUser } from '../../store/useCurrentUser';
// import { ROUTER } from '../../utils/routers';
// import Icon from '../Icon/Icon';
// import { MENU_SIZE } from './Sidebar.constant';
// import type { TMenuSize } from './Sidebar.interface';
// import { SIDE_MENUS, SIDE_MENUS_SETTINGS } from './Sidebar.menus';
// import './Sidebar.scss';
// import SideMenu from './SidebarMenu';
// import SidebarSettings from './SidebarSettings';

// export default function Sidebar() {
//   const [menuSize, setMenuSize] = useState<TMenuSize>(() => {
//     const storedSize = localStorage.getItem('menu_size');
//     return (storedSize as TMenuSize) || MENU_SIZE.LG;
//   });
//   // const { currentUser } = useCurrentUser();

//   const toggleMenuSize = () => {
//     setMenuSize((prev) => {
//       const size = prev === MENU_SIZE.LG ? MENU_SIZE.SM : MENU_SIZE.LG;
//       localStorage.setItem('menu_size', size);
//       return size;
//     });
//   };

//   const setMenuSizeAction = (size: TMenuSize) => {
//     const smallMenu = document.getElementById('sidebar-footer-image');
//     const largeMenu = document.getElementById('sidebar-footer-settings-toggle');
//     if (largeMenu && smallMenu) {
//       if (size === MENU_SIZE.LG) {
//         largeMenu.setAttribute('data-bs-toggle', 'dropdown');
//         smallMenu.removeAttribute('data-bs-toggle');
//       }
//       if (size === MENU_SIZE.SM) {
//         smallMenu.setAttribute('data-bs-toggle', 'dropdown');
//         largeMenu.removeAttribute('data-bs-toggle');
//       }
//     }
//     setMenuSize(size);
//   };

//   useLayoutEffect(() => {
//     setMenuSizeAction(menuSize);
//   }, [menuSize]);

//   useEffect(() => {
//     // if (!currentUser?.username) {
//     //   dispatchCurrentUser();
//     // }
//   }, []);
//   return (
//     <aside className={menuSize}>
//       <div className="sidebar-header">
//         <Link to={ROUTER['dashboard']['url']}>
//           <div className="sidebar-header-logo">
//             <div className="sidebar-header-logo-text">RG</div>
//           </div>
//         </Link>
//         <div className="sidebar-header-info">
//           <div className="sidebar-header-info-title">
//             <span className="sidebar-header-info-title-text">Eternals Registry</span>
//             <span className="sidebar-header-info-title-version">v0.0.1</span>
//           </div>
//           <div className="sidebar-header-info-edition">Community Edition</div>
//         </div>
//       </div>
//       <div className="sidebar-toggle" onClick={toggleMenuSize}>
//         <div className="sidebar-toggle-divider"></div>
//         <div className="sidebar-toggle-container">
//           <Icon library="lu" name="LuChevronLeft" className="sidebar-toggle-icon" />
//         </div>
//       </div>
//       <div className="sidebar-body" id="sidebarAccordion">
//         <SideMenu menus={SIDE_MENUS} menuSize={menuSize} />
//       </div>
//       <div className="sidebar-divider"></div>
//       <div className="sidebar-footer dropdown">
//         <div className="sidebar-footer-container">
//           {/* <div className="sidebar-footer-image" id="sidebar-footer-image">
//             <img src={currentUser?.image?.image} alt="profile" />
//           </div>
//           <div className="sidebar-footer-profile">
//             <div className="sidebar-footer-profile-name">
//               {currentUser?.first_name} {currentUser?.last_name}
//             </div>
//             <div className="sidebar-footer-profile-email">{currentUser?.email ? currentUser?.email : currentUser?.username}</div>
//           </div> */}
//           <div className="sidebar-footer-settings-toggle" id="sidebar-footer-settings-toggle">
//             <Icon library="lu" name="LuChevronsUpDown" className="sidebar-footer-settings-toggle-icon" />
//           </div>
//           <SidebarSettings className="sidebar-footer-settings dropdown-menu" menus={SIDE_MENUS_SETTINGS} />
//         </div>
//       </div>
//     </aside>
//   );
// }
