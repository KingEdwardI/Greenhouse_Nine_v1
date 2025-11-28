import React from 'react';
import { DatePicker } from '.';

export default {
  title: 'Form - Date Picker',
};

export const Default = () => <DatePicker />;

export const Controlled = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return <DatePicker value={date} onChange={setDate} />;
};



