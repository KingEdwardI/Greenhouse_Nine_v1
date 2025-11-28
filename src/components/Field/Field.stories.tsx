import { Field } from './Field';
import { Input, PasswordInput, NumberInput } from '../Input';

export default {
  title: 'Forms - Field'
};

export const Default = () => (
  <Field label="Email" hint="We will never share your email.">
    <Input placeholder="you@example.com" />
  </Field>
);

export const WithError = () => (
  <Field label="Username" error="Username already taken">
    <Input placeholder="johndoe" />
  </Field>
);

export const WithPassword = () => (
  <Field label="Password" required>
    <PasswordInput placeholder="••••••••" />
  </Field>
);

export const WithNumber = () => (
  <Field label="Quantity">
    <NumberInput defaultValue={2} min={0} max={10} />
  </Field>
);




