import React from 'react';
import { Heading as RadixHeading } from '@radix-ui/themes';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

type DesignSystemSize = 'sm' | 'md' | 'lg';

type RadixHeadingComponent = typeof RadixHeading;
type RadixHeadingProps = ComponentPropsWithoutRef<RadixHeadingComponent>;
type RadixHeadingElement = ElementRef<RadixHeadingComponent>;

export interface HeadingProps extends Omit<RadixHeadingProps, 'size'> {
  size?: DesignSystemSize;
}

export const Heading = React.forwardRef<RadixHeadingElement, HeadingProps>(
  ({ as = 'h2', size, className, children, ...props }, ref) => {
    const explicitSizeMap: Record<DesignSystemSize, NonNullable<RadixHeadingProps['size']>> = {
      sm: '3',
      md: '5',
      lg: '7',
    };

    const byLevelDefaultSizeMap: Record<NonNullable<RadixHeadingProps['as']>, NonNullable<RadixHeadingProps['size']>> = {
      h1: '8',
      h2: '7',
      h3: '6',
      h4: '5',
      h5: '4',
      h6: '3',
    };

    const composedClassName = ['gn-Heading', className].filter(Boolean).join(' ');
    const resolvedSize = size ? explicitSizeMap[size] : byLevelDefaultSizeMap[as ?? 'h2'];

    return (
      <RadixHeading ref={ref} as={as} size={resolvedSize} className={composedClassName} {...props}>
        {children}
      </RadixHeading>
    );
  }
);

Heading.displayName = 'Heading';


