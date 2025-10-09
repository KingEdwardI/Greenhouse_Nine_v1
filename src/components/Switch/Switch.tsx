import React from 'react';
import { Switch as RadixSwitch } from '@radix-ui/themes';
import type { SwitchProps as RadixSwitchProps } from '@radix-ui/themes';

type DesignSystemSize = 'sm' | 'md' | 'lg';

export interface SwitchProps extends Omit<RadixSwitchProps, 'size' | 'children'> {
  size?: DesignSystemSize;
  label?: React.ReactNode;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ size = 'md', label, ...props }, ref) => {
    const sizeMap: Record<DesignSystemSize, RadixSwitchProps['size']> = {
      sm: '1',
      md: '2',
      lg: '3',
    };

    if (label) {
      return (
        <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <RadixSwitch ref={ref} size={sizeMap[size]} {...props} />
          <span>{label}</span>
        </label>
      );
    }
    return <RadixSwitch ref={ref} size={sizeMap[size]} {...props} />;
  }
);

Switch.displayName = 'Switch';




