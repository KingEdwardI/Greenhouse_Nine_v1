import React from 'react';
import { TextField as RadixTextField, IconButton } from '@radix-ui/themes';

export interface PasswordInputProps extends Omit<React.ComponentProps<typeof RadixTextField.Root>, 'type'> {
  /**
   * Radix numeric size: "1" | "2" | "3"
   */
  size?: React.ComponentProps<typeof RadixTextField.Root>['size'];
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ size = '2', children, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const toggle = () => setIsVisible((v) => !v);

    return (
      <RadixTextField.Root ref={ref} type={isVisible ? 'text' : 'password'} size={size} {...props}>
        {children}
        <RadixTextField.Slot side="right">
          <IconButton size="1" variant="ghost" onClick={toggle} aria-label={isVisible ? 'Hide password' : 'Show password'}>
            {isVisible ? '🙈' : '👁️'}
          </IconButton>
        </RadixTextField.Slot>
      </RadixTextField.Root>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';



