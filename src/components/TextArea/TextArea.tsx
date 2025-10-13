import React from 'react';
import { TextArea as RadixTextArea } from '@radix-ui/themes';
import type { TextAreaProps as RadixTextAreaProps } from '@radix-ui/themes';
import './TextArea.css';

export interface TextAreaProps extends RadixTextAreaProps {
  /**
   * Radix numeric size: "1" | "2" | "3"
   */
  size?: RadixTextAreaProps['size'];
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ size = '2', className, ...props }, ref) => {
    const composedClassName = ['gn-TextArea', className].filter(Boolean).join(' ');

    return (
      <RadixTextArea ref={ref} size={size} className={composedClassName} {...props} />
    );
  }
);

TextArea.displayName = 'TextArea';




