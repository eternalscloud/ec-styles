export interface IHour {
  hour12: number;
  hour12Alias: string;
  hour24: number;
  noon: string;
  hour24Alias: string;
  active: boolean;
  currentHour?: string;
}

export const HOURS: IHour[] = [
  { hour12: 1, hour12Alias: '1 AM', hour24: 1, noon: 'AM', hour24Alias: '01', active: false },
  { hour12: 2, hour12Alias: '2 AM', hour24: 2, noon: 'AM', hour24Alias: '02', active: false },
  { hour12: 3, hour12Alias: '3 AM', hour24: 3, noon: 'AM', hour24Alias: '03', active: false },
  { hour12: 4, hour12Alias: '4 AM', hour24: 4, noon: 'AM', hour24Alias: '04', active: false },
  { hour12: 5, hour12Alias: '5 AM', hour24: 5, noon: 'AM', hour24Alias: '05', active: false },
  { hour12: 6, hour12Alias: '6 AM', hour24: 6, noon: 'AM', hour24Alias: '06', active: false },
  { hour12: 7, hour12Alias: '7 AM', hour24: 7, noon: 'AM', hour24Alias: '07', active: false },
  { hour12: 8, hour12Alias: '8 AM', hour24: 8, noon: 'AM', hour24Alias: '08', active: false },
  { hour12: 9, hour12Alias: '9 AM', hour24: 9, noon: 'AM', hour24Alias: '09', active: false },
  { hour12: 10, hour12Alias: '10 AM', hour24: 10, noon: 'AM', hour24Alias: '10', active: false },
  { hour12: 11, hour12Alias: '11 AM', hour24: 11, noon: 'AM', hour24Alias: '11', active: false },
  { hour12: 12, hour12Alias: '12 PM', hour24: 12, noon: 'PM', hour24Alias: '12', active: false },
  { hour12: 1, hour12Alias: '1 PM', hour24: 13, noon: 'PM', hour24Alias: '13', active: false },
  { hour12: 2, hour12Alias: '2 PM', hour24: 14, noon: 'PM', hour24Alias: '14', active: false },
  { hour12: 3, hour12Alias: '3 PM', hour24: 15, noon: 'PM', hour24Alias: '15', active: false },
  { hour12: 4, hour12Alias: '4 PM', hour24: 16, noon: 'PM', hour24Alias: '16', active: false },
  { hour12: 5, hour12Alias: '5 PM', hour24: 17, noon: 'PM', hour24Alias: '17', active: false },
  { hour12: 6, hour12Alias: '6 PM', hour24: 18, noon: 'PM', hour24Alias: '18', active: false },
  { hour12: 7, hour12Alias: '7 PM', hour24: 19, noon: 'PM', hour24Alias: '19', active: false },
  { hour12: 8, hour12Alias: '8 PM', hour24: 20, noon: 'PM', hour24Alias: '20', active: false },
  { hour12: 9, hour12Alias: '9 PM', hour24: 21, noon: 'PM', hour24Alias: '21', active: false },
  { hour12: 10, hour12Alias: '10 PM', hour24: 22, noon: 'PM', hour24Alias: '22', active: false },
  { hour12: 11, hour12Alias: '11 PM', hour24: 23, noon: 'PM', hour24Alias: '23', active: false },
  { hour12: 12, hour12Alias: '12 AM', hour24: 0, noon: 'AM', hour24Alias: '00', active: false },
];
