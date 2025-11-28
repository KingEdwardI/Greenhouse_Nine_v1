import React from 'react';
import { Combobox } from '.';

export default {
  title: 'Forms - Combobox',
};

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
];

export const Default = () => <Combobox options={options} />;

export const Controlled = () => {
  const [value, setValue] = React.useState<string | undefined>('banana');
  return <Combobox options={options} value={value} onChange={setValue} />;
};



