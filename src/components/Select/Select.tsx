import React from 'react';
import { Select as RadixSelect } from '@radix-ui/themes';
import type { Select as RadixSelectNS } from '@radix-ui/themes';

export interface SelectItemOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends RadixSelectNS.RootProps {
  /**
   * Radix numeric size: "1" | "2" | "3"
   */
  size?: RadixSelectNS.RootProps['size'];
  items?: SelectItemOption[];
}

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({ size = '2', items, children, ...props }, ref) => {
    const trigger = (
      <RadixSelect.Trigger ref={ref} />
    );

    return (
      <RadixSelect.Root size={size} {...props}>
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


