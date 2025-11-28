import { Select } from './Select';

export default {
  title: 'Forms - Select'
};

const items = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
];

export const Default = () => (
  <Select items={items} defaultValue="banana" />
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
    <Select size="1" items={items} defaultValue="apple" />
    <Select size="2" items={items} defaultValue="banana" />
    <Select size="3" items={items} defaultValue="cherry" />
  </div>
);




