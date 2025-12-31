// import { Button } from 'primereact/button';
// import { useEffect, useState } from 'react';
// import { Outlet, useLocation } from 'react-router-dom';
// import Loading from '../../components/Loading/Loading';
// import useCurrentUser from '../../store/useCurrentUser';
// import usePageLayout from '../../store/usePageLayout';
// import { ROUTER } from '../../utils/routers';
// import './ProfileLayout.scss';

// export default function ProfileLayout() {
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const { currentUser, setCurrentUser } = useCurrentUser();
//   const { title, actions } = usePageLayout();
//   const location = useLocation();

//   useEffect(() => {
//     setIsLoading(false);
//     if (!currentUser?.username) setCurrentUser();
//   }, []);

//   useEffect(() => {
//     const whiteBG = [ROUTER['change_password']['url'], ROUTER['profile_mfa_register']['url'], ROUTER['profile_mfa_verify']['url'], ROUTER['profile_mfa_download']['url']];
//     if (whiteBG.includes(location.pathname)) {
//       document.body.setAttribute('ec-app-bg', 'white');
//     }
//     return () => {
//       document.body.removeAttribute('ec-app-bg');
//     };
//   }, [location.pathname]);

//   if (isLoading) {
//     return (
//       <div className="profile-layout">
//         <div className="profile-layout-container">
//           <Loading />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="profile-layout">
//       <div className="profile-layout-container">
//         {title && (
//           <div className="profile-layout-header">
//             <div className="profile-layout-header-title">{title}</div>
//             <div className="profile-layout-header-actions">
//               {actions.map((action) => (
//                 <Button
//                   key={action.label}
//                   label={action.label}
//                   size="small"
//                   onClick={action.onClick}
//                   loading={action.loading}
//                   disabled={action.disabled}
//                   outlined={action.outlined}
//                 />
//               ))}
//             </div>
//           </div>
//         )}
//         <Outlet />
//       </div>
//     </div>
//   );
// }
