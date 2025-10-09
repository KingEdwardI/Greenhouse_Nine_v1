import React from 'react';
import { Card as RadixCard } from '@radix-ui/themes';
import type { CardProps as RadixCardProps } from '@radix-ui/themes';

type DesignSystemSize = 'sm' | 'md' | 'lg';

export interface CardProps extends Omit<RadixCardProps, 'size'> {
  children: React.ReactNode;
  size?: DesignSystemSize;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'surface', size = 'md', ...props }, ref) => {
    const sizeMap: Record<DesignSystemSize, RadixCardProps['size']> = {
      sm: '1',
      md: '2',
      lg: '3',
    };

    const mappedSize = sizeMap[size];
    return (
      <RadixCard
        ref={ref}
        variant={variant}
        size={mappedSize}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';