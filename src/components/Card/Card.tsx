import React from 'react';
import { Card as RadixCard } from '@radix-ui/themes';
import type { CardProps as RadixCardProps } from '@radix-ui/themes';
import './Card.css';

export interface CardProps extends RadixCardProps {
  /**
   * Radix numeric size: "1" | "2" | "3" | "4" | "5"
   */
  size?: RadixCardProps['size'];
  children: React.ReactNode;
  /**
   * Enable glass morphism effect
   */
  glass?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'surface', size = '2', glass = false, className, ...props }, ref) => {
    const composedClassName = [
      glass && 'gn-Card--glass',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <RadixCard
        ref={ref}
        variant={variant}
        size={size}
        className={composedClassName}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';