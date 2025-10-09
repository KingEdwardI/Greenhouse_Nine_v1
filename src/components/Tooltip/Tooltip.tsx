import React from 'react';
import { Tooltip as RadixTooltip } from '@radix-ui/themes';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type RadixTooltipProps = ComponentPropsWithoutRef<typeof RadixTooltip>;

export interface TooltipProps extends Omit<RadixTooltipProps, 'content' | 'children'> {
  content: ReactNode;
  children: ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children, ...props }) => {
  return (
    <RadixTooltip content={content} {...props}>
      {children}
    </RadixTooltip>
  );
};

Tooltip.displayName = 'Tooltip';


