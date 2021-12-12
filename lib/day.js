import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatTime = (time) => {
  return dayjs.utc(time).tz('Asia/Tokyo').format('YYYY-MM-DD');
};
