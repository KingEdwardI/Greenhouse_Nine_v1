import { Heading } from './Heading';

export default {
  title: 'Typography/Heading'
};

export const Default = () => {
  return <Heading>Default Heading</Heading>;
};

export const Sizes = () => {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline', flexWrap: 'wrap' }}>
      <Heading size="sm">Small</Heading>
      <Heading size="md">Medium</Heading>
      <Heading size="lg">Large</Heading>
    </div>
  );
};

export const Levels = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Heading as="h1">H1</Heading>
      <Heading as="h2">H2</Heading>
      <Heading as="h3">H3</Heading>
      <Heading as="h4">H4</Heading>
      <Heading as="h5">H5</Heading>
      <Heading as="h6">H6</Heading>
    </div>
  );
};


