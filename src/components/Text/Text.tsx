import React from 'react';
import { Text as RadixText } from '@radix-ui/themes';
import type { ComponentPropsWithoutRef } from 'react';

type DesignSystemSize = 'sm' | 'md' | 'lg';

type RadixTextProps = ComponentPropsWithoutRef<typeof RadixText>;

export interface TextProps extends Omit<RadixTextProps, 'size'> {
  size?: DesignSystemSize;
}

export const Text: React.FC<TextProps> = ({ size = 'md', className, children, ...props }) => {
    const sizeMap: Record<DesignSystemSize, NonNullable<RadixTextProps['size']>> = {
      sm: '1',
      md: '2',
      lg: '3',
    };

    const composedClassName = ['gn-Text', className].filter(Boolean).join(' ');
    const forwardedProps = props as RadixTextProps;
    return (
      <RadixText size={sizeMap[size]} className={composedClassName} {...forwardedProps}>
        {children}
      </RadixText>
    );
  };

Text.displayName = 'Text';


