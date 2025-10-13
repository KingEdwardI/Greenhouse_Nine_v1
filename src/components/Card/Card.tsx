import React from 'react';
import { Card as RadixCard } from '@radix-ui/themes';
import type { CardProps as RadixCardProps } from '@radix-ui/themes';

export interface CardProps extends RadixCardProps {
  /**
   * Radix numeric size: "1" | "2" | "3" | "4" | "5"
   */
  size?: RadixCardProps['size'];
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'surface', size = '2', ...props }, ref) => {
    return (
      <RadixCard
        ref={ref}
        variant={variant}
        size={size}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';