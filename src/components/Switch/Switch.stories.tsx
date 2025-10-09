import { Switch } from './Switch';

export default {
  title: 'Forms/Switch',
};

export const Default = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
    <Switch label="Enable feature" />
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
    <Switch size="sm" label="Small" />
    <Switch size="md" label="Medium" />
    <Switch size="lg" label="Large" />
  </div>
);




