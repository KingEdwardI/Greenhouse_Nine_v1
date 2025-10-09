import React from 'react';
import { Checkbox as RadixCheckbox } from '@radix-ui/themes';
import type { CheckboxProps as RadixCheckboxProps } from '@radix-ui/themes';

type DesignSystemSize = 'sm' | 'md' | 'lg';

export interface CheckboxProps extends Omit<RadixCheckboxProps, 'size' | 'children'> {
  size?: DesignSystemSize;
  label?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ size = 'md', label, ...props }, ref) => {
    const sizeMap: Record<DesignSystemSize, RadixCheckboxProps['size']> = {
      sm: '1',
      md: '2',
      lg: '3',
    };

    if (label) {
      return (
        <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <RadixCheckbox ref={ref} size={sizeMap[size]} {...props} />
          <span>{label}</span>
        </label>
      );
    }
    return <RadixCheckbox ref={ref} size={sizeMap[size]} {...props} />;
  }
);

Checkbox.displayName = 'Checkbox';




