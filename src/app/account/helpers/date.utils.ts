export const formatDate = (numbers: number[]): string => {
  if (numbers.length !== 7) {
    throw new Error('A date must consist of 7 numbers: [year, month, day, hour, minute, second, microsecond]');
  }

  const [year, month, day, hour, minute, second, microsecond] = numbers;

  const dateObj = new Date(year, month - 1, day, hour, minute, second, microsecond / 1000);

  const formattedDay = String(dateObj.getDate()).padStart(2, '0');
  const formattedMonth = String(dateObj.getMonth() + 1).padStart(2, '0');
  const formattedYear = dateObj.getFullYear();

  const formattedDate = `${formattedDay}/${formattedMonth}/${formattedYear}`;

  return formattedDate;
};
