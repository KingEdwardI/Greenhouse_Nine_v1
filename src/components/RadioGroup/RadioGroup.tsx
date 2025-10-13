import React from 'react';
import { RadioGroup as RadixRadioGroup } from '@radix-ui/themes';
import type { RadioGroup as RadixRadioGroupNS } from '@radix-ui/themes';

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps extends RadixRadioGroupNS.RootProps {
  /**
   * Radix numeric size: "1" | "2" | "3"
   */
  size?: RadixRadioGroupNS.RootProps['size'];
  options?: RadioOption[];
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ size = '2', options, children, ...props }, ref) => {
    return (
      <RadixRadioGroup.Root ref={ref} size={size} {...props}>
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




