import React from 'react';
import { TextField as RadixTextField } from '@radix-ui/themes';
import type { TextField as RadixTextFieldNS } from '@radix-ui/themes';
import './Input.css';

type DesignSystemSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<RadixTextFieldNS.RootProps, 'size'> {
  size?: DesignSystemSize;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'md', className, ...props }, ref) => {
    const sizeMap: Record<DesignSystemSize, RadixTextFieldNS.RootProps['size']> = {
      sm: '1',
      md: '2',
      lg: '3',
    };

    const mappedSize = sizeMap[size];
    const composedClassName = ['gn-Input', className].filter(Boolean).join(' ');

    return (
      <RadixTextField.Root ref={ref} size={mappedSize} className={composedClassName} {...props} />
    );
  }
);

Input.displayName = 'Input';




