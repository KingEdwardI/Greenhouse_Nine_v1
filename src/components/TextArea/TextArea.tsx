import React from 'react';
import { TextArea as RadixTextArea } from '@radix-ui/themes';
import type { TextAreaProps as RadixTextAreaProps } from '@radix-ui/themes';
import './TextArea.css';

type DesignSystemSize = 'sm' | 'md' | 'lg';

export interface TextAreaProps extends Omit<RadixTextAreaProps, 'size'> {
  size?: DesignSystemSize;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ size = 'md', className, ...props }, ref) => {
    const sizeMap: Record<DesignSystemSize, RadixTextAreaProps['size']> = {
      sm: '1',
      md: '2',
      lg: '3',
    };

    const mappedSize = sizeMap[size];
    const composedClassName = ['gn-TextArea', className].filter(Boolean).join(' ');

    return (
      <RadixTextArea ref={ref} size={mappedSize} className={composedClassName} {...props} />
    );
  }
);

TextArea.displayName = 'TextArea';




