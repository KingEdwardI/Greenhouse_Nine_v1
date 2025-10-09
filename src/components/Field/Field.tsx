import React from 'react';

export interface FieldProps {
  label?: React.ReactNode;
  htmlFor?: string;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  children: React.ReactNode;
  layout?: 'vertical' | 'horizontal';
}

export const Field: React.FC<FieldProps> = ({ label, htmlFor, hint, error, required, children, layout = 'vertical' }) => {
  const labelContent = label ? (
    <label htmlFor={htmlFor} style={{ display: 'block', marginBottom: 6 }}>
      {label}
      {required ? <span style={{ marginLeft: 4, color: 'var(--green-10)' }}>*</span> : null}
    </label>
  ) : null;

  const assistiveText = error ?? hint;
  const assistiveColor = error ? 'var(--red-10)' : 'var(--gray-9)';

  const containerStyle =
    layout === 'horizontal'
      ? { display: 'grid', gap: 12, gridTemplateColumns: '160px 1fr', alignItems: 'center' as const }
      : { display: 'grid', gap: 6 };

  return (
    <div style={containerStyle}>
      {labelContent}
      {children}
      {assistiveText ? (
        <div style={{ fontSize: '0.875rem', color: assistiveColor }}>{assistiveText}</div>
      ) : null}
    </div>
  );
};

Field.displayName = 'Field';




