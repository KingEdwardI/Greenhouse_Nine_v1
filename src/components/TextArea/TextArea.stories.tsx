import { TextArea } from './TextArea';

export default {
  title: 'Forms/TextArea'
};

export const Default = () => (
  <TextArea placeholder="Write something..." />
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
    <TextArea size="sm" placeholder="Small" />
    <TextArea size="md" placeholder="Medium" />
    <TextArea size="lg" placeholder="Large" />
  </div>
);

export const States = () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
    <TextArea placeholder="Enabled" />
    <TextArea disabled placeholder="Disabled" />
  </div>
);




