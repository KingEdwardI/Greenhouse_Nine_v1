import React from 'react';
import { TextField as RadixTextField, IconButton } from '@radix-ui/themes';

type DesignSystemSize = 'sm' | 'md' | 'lg';

export interface NumberInputProps extends Omit<React.ComponentProps<typeof RadixTextField.Root>, 'size' | 'type' | 'onChange' | 'value' | 'defaultValue'> {
  size?: DesignSystemSize;
  step?: number;
  min?: number;
  max?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number | undefined) => void;
}

function coerceToNumber(value: string): number | undefined {
  if (value.trim() === '') return undefined;
  const parsed = Number(value);
  return Number.isNaN(parsed) ? undefined : parsed;
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      size = 'md',
      step = 1,
      min,
      max,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const sizeMap: Record<DesignSystemSize, '1' | '2' | '3'> = {
      sm: '1',
      md: '2',
      lg: '3',
    };

    const isControlled = value !== undefined;
    const [uncontrolled, setUncontrolled] = React.useState<number | undefined>(defaultValue);
    const current = isControlled ? value : uncontrolled;

    const setValue = (next: number | undefined) => {
      const bounded =
        next === undefined
          ? undefined
          : Math.max(min ?? -Infinity, Math.min(max ?? Infinity, next));
      if (!isControlled) setUncontrolled(bounded);
      onChange?.(bounded);
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(coerceToNumber(e.target.value));
    };

    const increment = () => setValue((current ?? 0) + step);
    const decrement = () => setValue((current ?? 0) - step);

    return (
      <RadixTextField.Root
        ref={ref}
        size={sizeMap[size]}
        type="text"
        inputMode="decimal"
        pattern={"[0-9]*"}
        value={current ?? ''}
        onChange={handleTextChange}
        {...props}
      >
        <RadixTextField.Slot side="right">
          <IconButton size="1" variant="ghost" onClick={increment} aria-label="Increment value">+</IconButton>
        </RadixTextField.Slot>
        <RadixTextField.Slot side="right">
          <IconButton size="1" variant="ghost" onClick={decrement} aria-label="Decrement value">-</IconButton>
        </RadixTextField.Slot>
      </RadixTextField.Root>
    );
  }
);

NumberInput.displayName = 'NumberInput';



