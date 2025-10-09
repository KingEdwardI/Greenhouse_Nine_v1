import React from 'react';
import type { Meta } from '@ladle/react';
import { Button, ToastProvider, useToast } from '..';
import { ThemeProvider } from '../../theme/ThemeProvider';

const Demo: React.FC = () => {
  const { showToast } = useToast();
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button onClick={() => showToast({ title: 'Saved', description: 'Your changes were saved', intent: 'success' })}>
        Success
      </Button>
      <Button onClick={() => showToast({ title: 'Heads up', description: 'Check your inputs', intent: 'warning' })}>
        Warning
      </Button>
      <Button onClick={() => showToast({ title: 'Error', description: 'Something went wrong', intent: 'error' })}>
        Error
      </Button>
      <Button onClick={() => showToast({ title: 'Note', description: 'This is informational', intent: 'info' })}>
        Info
      </Button>
    </div>
  );
};

const meta: Meta = {
  title: 'Feedback/Toast',
};

export default meta;

export const Basic = () => (
  <ThemeProvider>
    <ToastProvider>
      <link rel="stylesheet" href="/style.css" />
      <Demo />
    </ToastProvider>
  </ThemeProvider>
);


