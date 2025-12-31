// import { Button } from 'primereact/button';
// import { useEffect, useState } from 'react';
// import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// import { AUTH_PAGES } from '../../common/common.constant';
// import type { ILiveInfo } from '../../common/common.interface';
// import Footer from '../../components/Footer/Footer';
// import Loading from '../../components/Loading/Loading';
// import Sidebar from '../../components/Sidebar/Sidebar';
// import { getLive } from '../../services/auth.service';
// import usePageLayout from '../../store/usePageLayout';
// import { ROUTER } from '../../utils/routers';
// import { WHITE_BG_PAGES } from './PageLayout.constant';
// import './PageLayout.scss';
// import Icon, { type IconLibrary } from '../../components/Icon/Icon';

// export default function PageLayout() {
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const { title, actions } = usePageLayout();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const getLiveInfo = async () => {
//     const res: ILiveInfo = await getLive();
//     setIsLoading(false);
//     if (!res.user) return navigate(ROUTER['register']['url']);
//     if (res.redirect in AUTH_PAGES && location.pathname !== AUTH_PAGES[res.redirect]['url']) {
//       return navigate(AUTH_PAGES[res.redirect]['url']);
//     }
//   };

//   useEffect(() => {
//     getLiveInfo();
//   }, []);

//   useEffect(() => {
//     if (WHITE_BG_PAGES.includes(location.pathname)) {
//       document.body.setAttribute('ec-app-bg', 'white');
//     }
//     return () => {
//       document.body.removeAttribute('ec-app-bg');
//     };
//   }, [location.pathname]);

//   if (isLoading) {
//     return <Loading />;
//   }

//   return (
//     <main className="app-page">
//       <div className="app-page-sidebar">
//         <Sidebar />
//       </div>
//       <div className="app-page-content">
//         <div className="app-page-content-body">
//           <div className="app-page-content-container">
//             {title && (
//               <div className="app-page-content-header">
//                 <div className="app-page-content-header-title">{title}</div>
//                 <div className="app-page-content-header-actions">
//                   {actions.map((action) =>
//                     action.type === 'button' ? (
//                       <Button
//                         key={action.label}
//                         label={action.label}
//                         size="small"
//                         onClick={action.onClick}
//                         loading={action.loading}
//                         disabled={action.disabled}
//                         outlined={action.outlined}
//                       />
//                     ) : (
//                       <div className="app-page-content-header-actions-icon">
//                         <Icon name={action.icon as string} library={action.iconLibrary as IconLibrary} onClick={action.onClick} />
//                       </div>
//                     )
//                   )}
//                 </div>
//               </div>
//             )}
//             <Outlet />
//           </div>
//         </div>
//         <div className="app-page-content-footer">
//           <Footer />
//         </div>
//       </div>
//     </main>
//   );
// }
