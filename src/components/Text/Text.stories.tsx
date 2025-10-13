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
      <Text size="1">Size 1</Text>
      <Text size="2">Size 2 (default)</Text>
      <Text size="3">Size 3</Text>
      <Text size="4">Size 4</Text>
      <Text size="5">Size 5</Text>
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


