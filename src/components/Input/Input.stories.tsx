import { Input, PasswordInput, NumberInput, MaskedInput } from '.';

export default {
  title: 'Forms/Input'
};

export const Default = () => <Input placeholder="Enter text" />;

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
    <Input size="1" placeholder="Size 1" />
    <Input size="2" placeholder="Size 2 (default)" />
    <Input size="3" placeholder="Size 3" />
  </div>
);

export const States = () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
    <Input placeholder="Enabled" />
    <Input disabled placeholder="Disabled" />
  </div>
);

export const Password = () => <PasswordInput placeholder="Enter password" />;

export const Number = () => <NumberInput placeholder="42" defaultValue={42} />;

export const Masked = () => (
  <div style={{ display: 'grid', gap: 12 }}>
    <MaskedInput mask="000-000" placeholder="123-456" />
    <MaskedInput mask={/\d/} placeholder="Digits only" />
  </div>
);




