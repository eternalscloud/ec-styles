// import moment from 'moment-timezone';
// import { create } from 'zustand';
// import type { IUser } from '../pages/Auth/Profile/Profile.interface';
// import { getMeUser } from '../services/auth.service';

// const requestStatus = { status: false };

// export interface ICurrentUser {
//   currentUser: IUser | null;
//   setCurrentUser: (force?: boolean) => void;
// }

// const useCurrentUser = create<ICurrentUser>((set, get) => ({
//   currentUser: null,
//   setCurrentUser: async (force: boolean = false) => {
//     getCurrentUser(get, set, force);
//   },
// }));

// const getCurrentUser = async (get: () => Partial<ICurrentUser>, set: (state: Partial<ICurrentUser>) => void, force: boolean = false) => {
//   try {
//     if (!force && (get()?.currentUser?.username || requestStatus.status)) return;
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
//     set({ currentUser: res.data });
//   } catch (error) {
//     requestStatus.status = false;
//     console.error(error);
//   }
// };

// export default useCurrentUser;
