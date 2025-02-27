import dayjs from 'dayjs';

export const formatDateTime = (dateTime: string | number) => {
  const formatted = dayjs(dateTime).format('YYYY-MM-DD HH:mm');
  return dayjs(formatted).isValid() ? formatted : '';
};

export const truncateNumberToInteger = (number: number) => {
  const text = String(number).toString();
  const index = text.indexOf('.');
  const totalNumberOfDecimalPlace = text.length - index - 1;

  if (totalNumberOfDecimalPlace > 0) {
    return Math.trunc(number);
  }

  return number;
};

export const formatTemperature = (temperature: number) => {
  return truncateNumberToInteger(temperature) + '°C';
};

export const isObjectEmpty = (value: any) =>
  Object.prototype.toString.call(value) === '[object Object]' &&
  JSON.stringify(value) === '{}';

export const removeEmptyObjectValue = <T extends object>(
  obj: T | null | undefined
): T | null => {
  const newObj = obj;

  if (newObj && !isObjectEmpty(obj)) {
    Object.keys(newObj).forEach((key) => {
      if (
        newObj[key as keyof T] === null ||
        newObj[key as keyof T] === undefined ||
        String(newObj[key as keyof T]) === '' ||
        Number.isNaN(newObj[key as keyof T])
      ) {
        delete newObj[key as keyof T];
      }
    });
  }
  return newObj || null;
};
