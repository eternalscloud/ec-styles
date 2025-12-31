// import { useEffect, useState } from 'react';
// import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// import type { ILiveInfo } from '../../common/common.interface';
// import Loading from '../../components/Loading/Loading';
// import { getLive } from '../../services/auth.service';
// import { ROUTER } from '../../utils/routers';
// import './AuthLayout.scss';
// import { BACKGROUND_IMAGES } from './AuthLayout.constant';

// export default function AuthLayout() {
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [title, setTitle] = useState<string>('');
//   const [description, setDescription] = useState<string>('');
//   const navigate = useNavigate();
//   const location = useLocation();

//   const getLiveInfo = async () => {
//     const res: ILiveInfo = await getLive();
//     setIsLoading(false);
//     if (!res.user) return navigate(ROUTER['register']['url']);
//     let redirectUrl = null;
//     if (res.user && res.redirect in ROUTER) {
//       redirectUrl = ROUTER[res.redirect as keyof typeof ROUTER];
//       if (location.pathname !== redirectUrl['url']) {
//         return navigate(redirectUrl['url']);
//       }
//     }
//   };
//   useEffect(() => {
//     if (location.pathname === ROUTER['login']['url']) {
//       setTitle('Login');
//       setDescription('Welcome back! Hope you are doing well.');
//     } else if (location.pathname === ROUTER['register']['url']) {
//       setTitle('Get Started');
//       setDescription('By Creating your first admin account');
//     }
//   }, [location.pathname]);

//   useEffect(() => {
//     document.body.setAttribute('ec-app-page', 'auth');
//     getLiveInfo();
//     return () => {
//       document.body.removeAttribute('ec-app-page');
//     };
//   }, []);

//   if (isLoading) {
//     return <Loading />;
//   }
//   return (
//     <div className="auth row g-0">
//       <div className="col-lg-4 col-rg-4 col-md-4 col-12 auth-body">
//         <div className="auth-body-container">
//           <div className="auth-body-info">
//             <div className="auth-body-info-title">{title}</div>
//             <div className="auth-body-info-description">{description}</div>
//           </div>
//           <div className="auth-body-content">
//             <Outlet />
//           </div>
//         </div>
//       </div>
//       <div className="col auth-background">
//         <div className="auth-background-content">
//           <img src={BACKGROUND_IMAGES[1]} alt="logo" />
//         </div>
//       </div>
//     </div>
//   );
// }
