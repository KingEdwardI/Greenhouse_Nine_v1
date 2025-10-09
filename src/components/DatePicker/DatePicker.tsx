import React from 'react';
import { Popover, TextField as RadixTextField, Button } from '@radix-ui/themes';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './DatePicker.css';

type DesignSystemSize = 'sm' | 'md' | 'lg';

export interface DatePickerProps {
  size?: DesignSystemSize;
  value?: Date | undefined;
  defaultValue?: Date | undefined;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  formatDate?: (date: Date) => string;
  disabled?: boolean;
}

function formatISO(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export const DatePicker: React.FC<DatePickerProps> = ({
  size = 'md',
  value,
  defaultValue,
  onChange,
  placeholder = 'Pick a date',
  formatDate = formatISO,
  disabled,
}) => {
  const sizeMap: Record<DesignSystemSize, '1' | '2' | '3'> = { sm: '1', md: '2', lg: '3' };
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState<Date | undefined>(defaultValue);
  const current = isControlled ? value : internal;

  const setValue = (next: Date | undefined) => {
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  return (
    <div className="gn-DatePicker">
      <Popover.Root>
        <Popover.Trigger>
          <RadixTextField.Root size={sizeMap[size]} disabled={disabled} readOnly value={current ? formatDate(current) : ''} placeholder={placeholder}>
            <RadixTextField.Slot side="right">
              <Button size="1" variant="ghost" disabled={disabled}>📅</Button>
            </RadixTextField.Slot>
          </RadixTextField.Root>
        </Popover.Trigger>
        <Popover.Content side="bottom" align="start" className="gn-DatePickerContent" style={{ width: '320px' }}>
          <DayPicker
            mode="single"
            selected={current}
            onSelect={(d) => setValue(d ?? undefined)}
            style={{
              '--rdp-accent-color': 'var(--accent-9)',
              '--rdp-accent-color-dark': 'var(--accent-10)',
              '--rdp-background-color': 'var(--color-panel)',
              '--rdp-outline': '2px solid var(--accent-8)',
              '--rdp-outline-selected': '2px solid var(--accent-9)',
            } as React.CSSProperties}
          />
        </Popover.Content>
      </Popover.Root>
    </div>
  );
};

DatePicker.displayName = 'DatePicker';



