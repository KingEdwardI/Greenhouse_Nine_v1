import { Button } from './Button';

export default {
  title: 'Forms/Button'
};

export const Default = () => {
  return <Button>Default Button</Button>;
};

export const Variants = () => {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button variant="solid">Solid</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
};

export const Sizes = () => {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
};

export const Colors = () => {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button color="accent">Accent (Theme)</Button>
      <Button color="orange">Orange</Button>
      <Button color="red">Red</Button>
      <Button color="blue">Blue</Button>
      <Button color="purple">Purple</Button>
    </div>
  );
};

export const States = () => {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>
  );
};