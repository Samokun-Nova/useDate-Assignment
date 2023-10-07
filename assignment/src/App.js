import React from 'react';
import useDate from './useDate';
import './App.css';

function MyComponent() {
  const { date, addDays, addMonths } = useDate(new Date());

  const handleAddDay = () => {
    addDays(1); // Add 1 day to the date
  };

  const handleAddMonth = () => {
    addMonths(1); // Add 1 month to the date
  };

  return (
    <div>
      <p>Date: {date.toDateString()}</p>
      <button onClick={handleAddDay}>Add Day</button>
      <button onClick={handleAddMonth}>Add Month</button>
    </div>
  );
}

export default MyComponent;