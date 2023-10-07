import { useState } from 'react';

function useDate(initialDate) {
  const [date, setDate] = useState(initialDate);

  const addDays = (daysToAdd) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + daysToAdd);
    setDate(newDate);
  };

  const addMonths = (monthsToAdd) => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() + monthsToAdd);
    setDate(newDate);
  };

  return {
    date,
    addDays,
    addMonths,
  };
}

export default useDate;