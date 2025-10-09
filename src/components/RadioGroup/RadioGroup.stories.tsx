import { RadioGroup } from './RadioGroup';

export default {
  title: 'Forms/RadioGroup'
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
    <RadioGroup size="sm" options={options} defaultValue="a" />
    <RadioGroup size="md" options={options} defaultValue="b" />
    <RadioGroup size="lg" options={options} defaultValue="c" />
  </div>
);




