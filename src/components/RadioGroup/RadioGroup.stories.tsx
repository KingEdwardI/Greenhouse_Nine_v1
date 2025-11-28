import { RadioGroup } from './RadioGroup';

export default {
  title: 'Form - Radio Group'
};

const options = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
];

export const Default = () => (
  <RadioGroup options={options} defaultValue="b" />
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
    <RadioGroup size="1" options={options} defaultValue="a" />
    <RadioGroup size="2" options={options} defaultValue="b" />
    <RadioGroup size="3" options={options} defaultValue="c" />
  </div>
);




