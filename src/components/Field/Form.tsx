import React from 'react';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  preventDefault?: boolean;
}

export const Form: React.FC<FormProps> = ({ onSubmit, preventDefault = true, children, ...props }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (preventDefault) event.preventDefault();
    onSubmit?.(event);
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
};

Form.displayName = 'Form';



