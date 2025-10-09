import React from 'react';
import { Select as RadixSelect } from '@radix-ui/themes';
import type { Select as RadixSelectNS } from '@radix-ui/themes';

type DesignSystemSize = 'sm' | 'md' | 'lg';

export interface SelectItemOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<RadixSelectNS.RootProps, 'size'> {
  size?: DesignSystemSize;
  items?: SelectItemOption[];
}

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({ size = 'md', items, children, ...props }, ref) => {
    const rootSizeMap: Record<DesignSystemSize, '1' | '2' | '3'> = {
      sm: '1',
      md: '2',
      lg: '3',
    };

    const trigger = (
      <RadixSelect.Trigger ref={ref} />
    );

    return (
      <RadixSelect.Root size={rootSizeMap[size]} {...props}>
        {trigger}
        <RadixSelect.Content side="bottom" align="start">
          {items
            ? items.map((item) => (
                <RadixSelect.Item key={item.value} value={item.value} disabled={item.disabled}>
                  {item.label}
                </RadixSelect.Item>
              ))
            : children}
        </RadixSelect.Content>
      </RadixSelect.Root>
    );
  }
);

Select.displayName = 'Select';


