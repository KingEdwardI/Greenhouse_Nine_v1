import React from 'react';
import { Heading as RadixHeading } from '@radix-ui/themes';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

type RadixHeadingComponent = typeof RadixHeading;
type RadixHeadingProps = ComponentPropsWithoutRef<RadixHeadingComponent>;
type RadixHeadingElement = ElementRef<RadixHeadingComponent>;

export interface HeadingProps extends RadixHeadingProps {
  /**
   * Radix numeric size: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
   * If not provided, defaults based on the heading level (h1-h6)
   */
  size?: RadixHeadingProps['size'];
}

export const Heading = React.forwardRef<RadixHeadingElement, HeadingProps>(
  ({ as = 'h2', size, className, children, ...props }, ref) => {
    const byLevelDefaultSizeMap: Record<NonNullable<RadixHeadingProps['as']>, NonNullable<RadixHeadingProps['size']>> = {
      h1: '8',
      h2: '7',
      h3: '6',
      h4: '5',
      h5: '4',
      h6: '3',
    };

    const composedClassName = ['gn-Heading', className].filter(Boolean).join(' ');
    const resolvedSize = size ?? byLevelDefaultSizeMap[as ?? 'h2'];

    return (
      <RadixHeading ref={ref} as={as} size={resolvedSize} className={composedClassName} {...props}>
        {children}
      </RadixHeading>
    );
  }
);

Heading.displayName = 'Heading';


