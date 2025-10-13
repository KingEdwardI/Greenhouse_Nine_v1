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
    <Switch size="1" label="Size 1" />
    <Switch size="2" label="Size 2 (default)" />
    <Switch size="3" label="Size 3" />
  </div>
);




