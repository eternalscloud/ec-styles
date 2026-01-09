// import { create } from 'zustand';
// import type { IconLibrary } from '../components/Icon/Icon';

// interface IAction {
//   label: string;
//   type: 'button' | 'icon';
//   icon?: string;
//   iconLibrary?: IconLibrary;
//   onClick: (data?: any) => any;
//   disabled: boolean;
//   loading: boolean;
//   outlined?: boolean;
// }

// interface IPageLayout {
//   title: string;
//   actions: IAction[];
//   setTitle: (title: string) => void;
//   setActions: (actions: IAction[]) => void;
// }

// const usePageLayout = create<IPageLayout>((set) => ({
//   title: '',
//   actions: [],
//   setTitle: (title: string) => set({ title }),
//   setActions: (actions: IAction[]) => set({ actions }),
// }));

// export default usePageLayout;
