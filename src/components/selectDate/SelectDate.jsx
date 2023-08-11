import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './selectDate.scss'

const SelectDate = () => {
  const today = new Date();
  const fourDaysLater = new Date(today);
  fourDaysLater.setDate(today.getDate() + 4);

  const [startDate, setStartDate] = useState(null);

  const isDateSelectable = (date) => {
    return date >= today && date <= fourDaysLater;
  };

  return (
    <DatePicker
      className='selectHeader__select'
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      filterDate={isDateSelectable}
      placeholderText="Fecha"
    />
  );
};

export default SelectDate;

