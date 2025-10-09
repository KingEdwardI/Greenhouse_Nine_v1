import React from 'react';
import { DropdownMenu as RadixDropdown } from '@radix-ui/themes';
import { Button as DSButton } from '../Button';
import './Dropdown.css';

type DesignSystemSize = 'sm' | 'md' | 'lg';

export interface DropdownItem {
  label: string;
  value?: string;
  disabled?: boolean;
  onSelect?: () => void;
}

export interface DropdownSection {
  label?: string;
  items: DropdownItem[];
}

export interface DropdownProps extends Omit<React.ComponentPropsWithoutRef<typeof RadixDropdown.Root>, 'children'> {
  size?: DesignSystemSize;
  label: React.ReactNode;
  sections: DropdownSection[];
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
}

export const Dropdown: React.FC<DropdownProps> = ({ 
  size = 'md', 
  label, 
  sections, 
  align = 'start',
  side = 'bottom',
  sideOffset = 4,
  ...props 
}) => {
  return (
    <RadixDropdown.Root {...props}>
      <RadixDropdown.Trigger>
        <DSButton size={size} variant="soft">
          {label}
          <RadixDropdown.TriggerIcon />
        </DSButton>
      </RadixDropdown.Trigger>
      <RadixDropdown.Content 
        className="dropdown-content"
        align={align}
        side={side}
        sideOffset={sideOffset}
      >
        {sections.map((section, idx) => (
          <React.Fragment key={idx}>
            {section.label ? (
              <RadixDropdown.Label className="dropdown-label">
                {section.label}
              </RadixDropdown.Label>
            ) : null}
            <RadixDropdown.Group>
              {section.items.map((item, i) => (
                <RadixDropdown.Item 
                  key={`${idx}-${i}`} 
                  className="dropdown-item"
                  disabled={item.disabled} 
                  onSelect={item.onSelect}
                >
                  {item.label}
                </RadixDropdown.Item>
              ))}
            </RadixDropdown.Group>
            {idx < sections.length - 1 ? (
              <RadixDropdown.Separator className="dropdown-separator" />
            ) : null}
          </React.Fragment>
        ))}
      </RadixDropdown.Content>
    </RadixDropdown.Root>
  );
};

Dropdown.displayName = 'Dropdown';


