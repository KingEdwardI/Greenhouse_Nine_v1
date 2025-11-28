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

const GlassDemo: React.FC = () => {
  const { showToast } = useToast();
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button
        glass
        onClick={() => showToast({
          title: 'Saved',
          description: 'Your changes were saved with glass effect',
          intent: 'success',
          glass: true
        })}
      >
        Success (Glass)
      </Button>
      <Button
        glass
        onClick={() => showToast({
          title: 'Heads up',
          description: 'Check your inputs with glass effect',
          intent: 'warning',
          glass: true
        })}
      >
        Warning (Glass)
      </Button>
      <Button
        glass
        onClick={() => showToast({
          title: 'Error',
          description: 'Something went wrong with glass effect',
          intent: 'error',
          glass: true
        })}
      >
        Error (Glass)
      </Button>
      <Button
        glass
        onClick={() => showToast({
          title: 'Note',
          description: 'This is informational with glass effect',
          intent: 'info',
          glass: true
        })}
      >
        Info (Glass)
      </Button>
      <Button
        glass
        onClick={() => showToast({
          title: 'Action Required',
          description: 'You have pending items to review',
          intent: 'info',
          glass: true,
          actionLabel: 'Review',
          onAction: () => console.log('Action clicked')
        })}
      >
        With Action (Glass)
      </Button>
    </div>
  );
};

const meta: Meta = {
  title: 'Feedback - Toast',
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

export const Glass = () => (
  <ThemeProvider>
    <ToastProvider>
      <link rel="stylesheet" href="/style.css" />
      <GlassDemo />
    </ToastProvider>
  </ThemeProvider>
);


