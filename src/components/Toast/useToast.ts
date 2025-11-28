import React from 'react';

export interface ToastOptions {
  title?: React.ReactNode;
  description?: React.ReactNode;
  intent?: 'info' | 'success' | 'warning' | 'error';
  durationMs?: number;
  actionLabel?: string;
  onAction?: () => void;
  glass?: boolean;
}

interface ToastContextValue {
  showToast: (options: ToastOptions) => void;
}

export const ToastContext = React.createContext<ToastContextValue | undefined>(undefined);

export const useToast = (): ToastContextValue => {
  const ctx = React.useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return ctx;
};