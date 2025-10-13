import React from 'react';
import { IMaskInput } from 'react-imask';
import './MaskedInput.css';

export interface MaskedInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue' | 'onChange' | 'type'> {
  /**
   * Radix numeric size: "1" | "2" | "3"
   */
  size?: '1' | '2' | '3';
  mask: string | RegExp;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  unmask?: boolean;
}

export const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ size = '2', mask, value, defaultValue, onChange, unmask, className, ...props }, ref) => {
    const isControlled = value !== undefined;
    const [internal, setInternal] = React.useState<string>(defaultValue ?? '');
    const current = isControlled ? value ?? '' : internal;

    const composedClassName = [
      'gn-MaskedInput',
      `gn-MaskedInput--${size}`,
      className
    ].filter(Boolean).join(' ');

    return (
      <IMaskInput
        ref={ref}
        mask={mask as unknown as string}
        value={current}
        onAccept={(val: unknown) => {
          const stringVal = String(val ?? '');
          if (!isControlled) setInternal(stringVal);
          onChange?.(stringVal);
        }}
        unmask={unmask}
        className={composedClassName}
        {...props}
      />
    );
  }
);

MaskedInput.displayName = 'MaskedInput';



