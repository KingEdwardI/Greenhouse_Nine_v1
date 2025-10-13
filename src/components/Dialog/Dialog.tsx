import React from 'react';
import { Dialog as RadixDialog, Flex } from '@radix-ui/themes';
import type { Dialog as RadixDialogNS } from '@radix-ui/themes';

export interface DialogProps extends Omit<RadixDialogNS.RootProps, 'children'> {
  /**
   * Radix numeric size: "1" | "2" | "3" | "4"
   */
  size?: RadixDialogNS.ContentProps['size'];
  /**
   * Element that opens the dialog when interacted with.
   */
  trigger: React.ReactNode;
  /**
   * Optional dialog title, rendered inside the content.
   */
  title?: React.ReactNode;
  /**
   * Optional dialog description, rendered under the title.
   */
  description?: React.ReactNode;
  /**
   * Dialog body content.
   */
  children?: React.ReactNode;
  /**
   * Footer actions area (e.g., buttons). Placed at the bottom of the content.
   */
  actions?: React.ReactNode;
}

type DialogComponent = React.FC<DialogProps> & {
  Close: typeof RadixDialog.Close;
};

const DialogBase: React.FC<DialogProps> = ({
  size = '2',
  trigger,
  title,
  description,
  children,
  actions,
  ...rootProps
}) => {
  return (
    <RadixDialog.Root {...rootProps}>
      <RadixDialog.Trigger>
        {/* Consumers typically pass a Button here */}
        <span>{trigger}</span>
      </RadixDialog.Trigger>
      <RadixDialog.Content size={size}>
        {title ? <RadixDialog.Title>{title}</RadixDialog.Title> : null}
        {description ? (
          <RadixDialog.Description>{description}</RadixDialog.Description>
        ) : null}
        {children}
        {actions ? (
          <Flex mt="4" gap="3" justify="end" className="gn-DialogActions">
            {actions}
          </Flex>
        ) : null}
      </RadixDialog.Content>
    </RadixDialog.Root>
  );
};

export const Dialog = Object.assign(DialogBase, {
  Close: RadixDialog.Close,
}) as DialogComponent;

Dialog.displayName = 'Dialog';


