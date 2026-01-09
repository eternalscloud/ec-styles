import moment from 'moment-timezone';

export default function DateFormatter({ date }: { date: string }) {
  return <span style={{ whiteSpace: 'nowrap' }}>{moment(date).format('DD-MM-YYYY hh:mm A')}</span>;
}
