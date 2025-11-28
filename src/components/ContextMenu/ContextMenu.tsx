import React from 'react';
import { ContextMenu as RadixContextMenu } from '@radix-ui/themes';
import './ContextMenu.css';

export interface ContextMenuItemData {
  id: string;
  label?: React.ReactNode;
  icon?: React.ReactNode;
  shortcut?: string;
  disabled?: boolean;
  destructive?: boolean;
  separator?: boolean;
  children?: ContextMenuItemData[];
}

export interface ContextMenuProps {
  children: React.ReactNode;
  items: ContextMenuItemData[];
  onItemSelect?: (itemId: string) => void;
  disabled?: boolean;
  /**
   * Enables the glassmorphism variant for the menu panel and items.
   */
  glass?: boolean;
}

const ContextMenuItem: React.FC<{
  item: ContextMenuItemData;
  onSelect?: (itemId: string) => void;
  glass?: boolean;
}> = ({ item, onSelect, glass = false }) => {
  const separatorClassName = ['gn-ContextMenuSeparator', glass && 'gn-ContextMenuSeparator--glass']
    .filter(Boolean)
    .join(' ');
  const contentClassName = ['gn-ContextMenuContent', glass && 'gn-ContextMenuContent--glass']
    .filter(Boolean)
    .join(' ');
  const itemClassName = [
    'gn-ContextMenuItem',
    item.destructive && 'gn-ContextMenuItem--destructive',
    glass && 'gn-ContextMenuItem--glass',
  ]
    .filter(Boolean)
    .join(' ');

  if (item.separator) {
    return <RadixContextMenu.Separator className={separatorClassName} />;
  }

  if (item.children && item.children.length > 0) {
    return (
      <RadixContextMenu.Sub>
        <RadixContextMenu.SubTrigger className={itemClassName}>
          {item.icon && <span className="gn-ContextMenuIcon">{item.icon}</span>}
          <span className="gn-ContextMenuLabel">{item.label}</span>
        </RadixContextMenu.SubTrigger>
        <RadixContextMenu.SubContent className={contentClassName}>
          {item.children.map((child, index) => (
            <ContextMenuItem key={child.id || index} item={child} onSelect={onSelect} glass={glass} />
          ))}
        </RadixContextMenu.SubContent>
      </RadixContextMenu.Sub>
    );
  }

  return (
    <RadixContextMenu.Item className={itemClassName} disabled={item.disabled} onSelect={() => onSelect?.(item.id)}>
      {item.icon && <span className="gn-ContextMenuIcon">{item.icon}</span>}
      <span className="gn-ContextMenuLabel">{item.label}</span>
      {item.shortcut && <span className="gn-ContextMenuShortcut">{item.shortcut}</span>}
    </RadixContextMenu.Item>
  );
};

export const ContextMenu: React.FC<ContextMenuProps> = ({
  children,
  items,
  onItemSelect,
  disabled = false,
  glass = false,
}) => {
  const contentClassName = ['gn-ContextMenuContent', glass && 'gn-ContextMenuContent--glass']
    .filter(Boolean)
    .join(' ');

  return (
    <RadixContextMenu.Root>
      <RadixContextMenu.Trigger disabled={disabled} className="gn-ContextMenuTrigger">
        {children}
      </RadixContextMenu.Trigger>
      <RadixContextMenu.Content className={contentClassName}>
        {items.map((item, index) => (
          <ContextMenuItem key={item.id || index} item={item} onSelect={onItemSelect} glass={glass} />
        ))}
      </RadixContextMenu.Content>
    </RadixContextMenu.Root>
  );
};

ContextMenu.displayName = 'ContextMenu';