import React from 'react';
import { Button } from './Button';
import type { ButtonProps } from './Button';

interface LoadingButtonProps extends Omit<ButtonProps, 'loading'> {
  isLoading?: boolean;
  loadingText?: string;
}

/**
 * A Button component that shows loading state
 * This is a wrapper around the Button component we just enhanced
 */
export const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading = false,
  loadingText = 'Loading...',
  children,
  ...props
}) => {
  return (
    <Button loading={isLoading} {...props}>
      {isLoading ? loadingText : children}
    </Button>
  );
};

export default LoadingButton;
