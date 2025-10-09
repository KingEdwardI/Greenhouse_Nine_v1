import React from 'react';
import { TextField as RadixTextField, IconButton } from '@radix-ui/themes';

type DesignSystemSize = 'sm' | 'md' | 'lg';

export interface PasswordInputProps extends Omit<React.ComponentProps<typeof RadixTextField.Root>, 'size' | 'type'> {
  size?: DesignSystemSize;
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ size = 'md', children, ...props }, ref) => {
    const sizeMap: Record<DesignSystemSize, '1' | '2' | '3'> = {
      sm: '1',
      md: '2',
      lg: '3',
    };

    const [isVisible, setIsVisible] = React.useState(false);
    const toggle = () => setIsVisible((v) => !v);

    return (
      <RadixTextField.Root ref={ref} type={isVisible ? 'text' : 'password'} size={sizeMap[size]} {...props}>
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



