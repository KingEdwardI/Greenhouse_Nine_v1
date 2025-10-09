import { Select } from './Select';

export default {
  title: 'Forms/Select'
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
    <Select size="sm" items={items} defaultValue="apple" />
    <Select size="md" items={items} defaultValue="banana" />
    <Select size="lg" items={items} defaultValue="cherry" />
  </div>
);




