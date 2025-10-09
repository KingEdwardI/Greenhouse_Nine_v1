import { Checkbox } from './Checkbox';

export default {
  title: 'Forms/Checkbox'
};

export const Default = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
    <Checkbox label="Check me" />
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
    <Checkbox size="sm" label="Small" />
    <Checkbox size="md" label="Medium" />
    <Checkbox size="lg" label="Large" />
  </div>
);




