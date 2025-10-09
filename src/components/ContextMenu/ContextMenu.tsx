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
}

const ContextMenuItem: React.FC<{
  item: ContextMenuItemData;
  onSelect?: (itemId: string) => void;
}> = ({ item, onSelect }) => {
  if (item.separator) {
    return <RadixContextMenu.Separator className="gn-ContextMenuSeparator" />;
  }

  if (item.children && item.children.length > 0) {
    return (
      <RadixContextMenu.Sub>
        <RadixContextMenu.SubTrigger className="gn-ContextMenuItem">
          {item.icon && <span className="gn-ContextMenuIcon">{item.icon}</span>}
          <span className="gn-ContextMenuLabel">{item.label}</span>
        </RadixContextMenu.SubTrigger>
        <RadixContextMenu.SubContent className="gn-ContextMenuContent">
          {item.children.map((child, index) => (
            <ContextMenuItem key={child.id || index} item={child} onSelect={onSelect} />
          ))}
        </RadixContextMenu.SubContent>
      </RadixContextMenu.Sub>
    );
  }

  return (
    <RadixContextMenu.Item
      className={`gn-ContextMenuItem ${item.destructive ? 'gn-ContextMenuItem--destructive' : ''}`}
      disabled={item.disabled}
      onSelect={() => onSelect?.(item.id)}
    >
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
}) => {
  return (
    <RadixContextMenu.Root>
      <RadixContextMenu.Trigger disabled={disabled} className="gn-ContextMenuTrigger">
        {children}
      </RadixContextMenu.Trigger>
      <RadixContextMenu.Content className="gn-ContextMenuContent">
        {items.map((item, index) => (
          <ContextMenuItem key={item.id || index} item={item} onSelect={onItemSelect} />
        ))}
      </RadixContextMenu.Content>
    </RadixContextMenu.Root>
  );
};

ContextMenu.displayName = 'ContextMenu';