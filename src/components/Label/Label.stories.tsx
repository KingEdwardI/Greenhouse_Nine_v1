import { Label } from './Label';

export default {
  title: 'Forms/Label',
};

export const Default = () => (
  <Label htmlFor="field">Label</Label>
);

export const Required = () => (
  <Label htmlFor="field" required>
    Required Label
  </Label>
);




