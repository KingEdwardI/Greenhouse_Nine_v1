import { TextArea } from './TextArea';

export default {
  title: 'Forms/TextArea'
};

export const Default = () => (
  <TextArea placeholder="Write something..." />
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
    <TextArea size="1" placeholder="Size 1" />
    <TextArea size="2" placeholder="Size 2 (default)" />
    <TextArea size="3" placeholder="Size 3" />
  </div>
);

export const States = () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
    <TextArea placeholder="Enabled" />
    <TextArea disabled placeholder="Disabled" />
  </div>
);




