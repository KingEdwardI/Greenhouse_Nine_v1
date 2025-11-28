import { Checkbox } from './Checkbox';

export default {
  title: 'Form - Checkbox'
};

export const Default = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
    <Checkbox label="Check me" />
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
    <Checkbox size="1" label="Size 1" />
    <Checkbox size="2" label="Size 2 (default)" />
    <Checkbox size="3" label="Size 3" />
  </div>
);




