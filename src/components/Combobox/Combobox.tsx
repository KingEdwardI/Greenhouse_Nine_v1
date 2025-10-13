import React from 'react';
import { Popover, TextField as RadixTextField } from '@radix-ui/themes';
import { CommandRoot, CommandInput, CommandList, CommandEmpty, CommandItem } from 'cmdk';
import './Combobox.css';

export interface ComboboxOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface ComboboxProps {
  /**
   * Radix numeric size: "1" | "2" | "3"
   */
  size?: '1' | '2' | '3';
  options: ComboboxOption[];
  value?: string | undefined;
  defaultValue?: string | undefined;
  onChange?: (value: string | undefined) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  disabled?: boolean;
}

export const Combobox: React.FC<ComboboxProps> = ({
  size = '2',
  options,
  value,
  defaultValue,
  onChange,
  placeholder = 'Select…',
  searchPlaceholder = 'Search…',
  disabled,
}) => {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState<string | undefined>(defaultValue);
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const current = isControlled ? value : internal;

  const setValue = (next: string | undefined) => {
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  const display = options.find((o) => o.value === current)?.label ?? '';
  const filtered = query
    ? options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()))
    : options;

  return (
    <div className="gn-Combobox">
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger disabled={disabled}>
          <RadixTextField.Root size={size} disabled={disabled} readOnly value={display} placeholder={placeholder} />
        </Popover.Trigger>
        <Popover.Content side="bottom" align="start" className="gn-ComboboxContent">
          <CommandRoot label="Command menu">
            <CommandInput
              value={query}
              onValueChange={setQuery}
              placeholder={searchPlaceholder}
              autoFocus
              className="gn-ComboboxInput"
            />
            <CommandList className="gn-ComboboxList">
              {filtered.length === 0 ? (
                <CommandEmpty className="gn-ComboboxEmpty">No results</CommandEmpty>
              ) : (
                filtered.map((opt) => (
                  <CommandItem
                    key={opt.value}
                    onSelect={() => {
                      setValue(opt.value);
                      setOpen(false);
                    }}
                    disabled={opt.disabled}
                    className="gn-ComboboxItem"
                  >
                    {opt.label}
                  </CommandItem>
                ))
              )}
            </CommandList>
          </CommandRoot>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
};

Combobox.displayName = 'Combobox';



