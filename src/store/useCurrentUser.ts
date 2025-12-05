// import moment from 'moment-timezone';
// import { create } from 'zustand';
// import { getMeUser } from '../services/auth.service';
// import type { IUser } from '../pages/Auth/Profile/Profile.interface';

// const requestStatus = { status: false };

// export interface IAction {
//   label: string;
//   onClick: (data?: any) => any;
//   disabled: boolean;
//   loading: boolean;
//   outlined?: boolean;
// }

// export interface ICurrentUser {
//   currentUser: IUser | null;
//   title: string;
//   actions: IAction[];
//   setCurrentUser: (currentUser: IUser) => void;
//   setTitle: (title: string) => void;
//   setActions: (actions: IAction[]) => void;
// }

// const useCurrentUser = create<ICurrentUser>((set) => ({
//   currentUser: null,
//   title: '',
//   actions: [],
//   setCurrentUser: (currentUser: IUser) => set({ currentUser }),
//   setTitle: (title: string) => set({ title }),
//   setActions: (actions: IAction[]) => set({ actions }),
// }));

// const dispatchCurrentUser = async (force: boolean = false) => {
//   try {
//     const { currentUser, setCurrentUser } = useCurrentUser.getState();
//     if (!force && (currentUser?.username || requestStatus.status)) return;
//     requestStatus.status = true;
//     const res = await getMeUser();
//     if (!res?.data?.username) {
//       throw new Error(res?.message || 'Something went wrong');
//     }
//     if (res?.data?.date_of_birth) {
//       const dateOfBirthMoment = moment(res.data.date_of_birth);
//       res['data']['age'] = moment().diff(dateOfBirthMoment, 'years');
//       res['data']['date_of_birth'] = dateOfBirthMoment.format('DD MMMM YYYY');
//     }
//     setCurrentUser(res.data);
//   } catch (error) {
//     requestStatus.status = false;
//     console.error(error);
//   }
// };

// export { dispatchCurrentUser, useCurrentUser };
