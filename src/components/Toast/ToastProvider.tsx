import React from 'react';
import * as RadixToast from '@radix-ui/react-toast';
import { type ToastOptions, ToastContext } from './useToast';

interface ToastItem extends Required<Pick<ToastOptions, 'intent'>> {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  durationMs?: number;
  actionLabel?: string;
  onAction?: () => void;
}

export interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = React.useCallback((options: ToastOptions) => {
    const id = `toast-${Math.random().toString(36).slice(2)}`;
    const item: ToastItem = {
      id,
      title: options.title,
      description: options.description,
      intent: options.intent ?? 'info',
      durationMs: options.durationMs ?? 4000,
      actionLabel: options.actionLabel,
      onAction: options.onAction,
    };
    setToasts((prev) => [...prev, item]);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      <RadixToast.Provider swipeDirection="right">
        {children}
        {toasts.map((toast) => (
          <RadixToast.Root
            key={toast.id}
            className={`gn-Toast gn-Toast--${toast.intent}`}
            duration={toast.durationMs}
            defaultOpen
            onOpenChange={(open) => {
              if (!open) removeToast(toast.id);
            }}
          >
            {toast.title ? <RadixToast.Title className="gn-ToastTitle">{toast.title}</RadixToast.Title> : null}
            {toast.description ? (
              <RadixToast.Description className="gn-ToastDescription">{toast.description}</RadixToast.Description>
            ) : null}
            {toast.actionLabel ? (
              <RadixToast.Action asChild altText={toast.actionLabel} onClick={toast.onAction}>
                <button className="gn-ToastAction" type="button">{toast.actionLabel}</button>
              </RadixToast.Action>
            ) : null}
            <RadixToast.Close className="gn-ToastClose" aria-label="Close">
              ×
            </RadixToast.Close>
          </RadixToast.Root>
        ))}
        <RadixToast.Viewport className="gn-ToastViewport" />
      </RadixToast.Provider>
    </ToastContext.Provider>
  );
};

ToastProvider.displayName = 'ToastProvider';


