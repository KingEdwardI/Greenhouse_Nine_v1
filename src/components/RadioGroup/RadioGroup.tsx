import React from 'react';
import { RadioGroup as RadixRadioGroup } from '@radix-ui/themes';
import type { RadioGroup as RadixRadioGroupNS } from '@radix-ui/themes';

type DesignSystemSize = 'sm' | 'md' | 'lg';

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps extends Omit<RadixRadioGroupNS.RootProps, 'size'> {
  size?: DesignSystemSize;
  options?: RadioOption[];
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ size = 'md', options, children, ...props }, ref) => {
    const sizeMap: Record<DesignSystemSize, RadixRadioGroupNS.RootProps['size']> = {
      sm: '1',
      md: '2',
      lg: '3',
    };

    return (
      <RadixRadioGroup.Root ref={ref} size={sizeMap[size]} {...props}>
        {options
          ? options.map((opt) => (
              <RadixRadioGroup.Item key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </RadixRadioGroup.Item>
            ))
          : children}
      </RadixRadioGroup.Root>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';




