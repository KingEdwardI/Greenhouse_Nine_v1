import { Text } from './Text';

export default {
  title: 'Typography/Text'
};

export const Default = () => {
  return <Text>Default text</Text>;
};

export const Sizes = () => {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Text size="sm">Small</Text>
      <Text size="md">Medium</Text>
      <Text size="lg">Large</Text>
    </div>
  );
};

export const Weights = () => {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Text weight="light">Light</Text>
      <Text weight="regular">Regular</Text>
      <Text weight="medium">Medium</Text>
      <Text weight="bold">Bold</Text>
    </div>
  );
};


