import React from "react";
import { DropdownMenu as RadixDropdown } from "@radix-ui/themes";
import { Button as DSButton } from "../Button";
import type { ButtonProps } from "../Button";
import "./Dropdown.css";

export interface DropdownItem {
  label: string;
  value?: string;
  disabled?: boolean;
  onSelect?: () => void;
}

export interface DropdownSection {
  label?: string;
  items: DropdownItem[];
}

export interface DropdownProps extends Omit<
  React.ComponentPropsWithoutRef<typeof RadixDropdown.Root>,
  "children"
> {
  /**
   * Radix numeric size: "1" | "2" | "3" | "4" - applied to the trigger button
   */
  size?: ButtonProps["size"];
  label: React.ReactNode;
  sections: DropdownSection[];
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  /**
   * Enable glass morphism treatment for the trigger + content surface
   */
  glass?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  size = "2",
  label,
  sections,
  align = "start",
  side = "bottom",
  sideOffset = 4,
  glass = false,
  ...props
}) => {
  const contentClassName = [
    "dropdown-content",
    glass && "dropdown-content--glass",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <RadixDropdown.Root {...props}>
      <RadixDropdown.Trigger>
        <DSButton size={size} variant="soft" glass={glass}>
          {label}
          <RadixDropdown.TriggerIcon />
        </DSButton>
      </RadixDropdown.Trigger>
      <RadixDropdown.Content
        className={contentClassName}
        align={align}
        side={side}
        sideOffset={sideOffset}
      >
        {sections.map((section, idx) => (
          <React.Fragment key={idx}>
            {section.label ? (
              <RadixDropdown.Label className="dropdown-label">
                {section.label}
              </RadixDropdown.Label>
            ) : null}
            <RadixDropdown.Group>
              {section.items.map((item, i) => (
                <RadixDropdown.Item
                  key={`${idx}-${i}`}
                  className="dropdown-item"
                  disabled={item.disabled}
                  onSelect={item.onSelect}
                >
                  {item.label}
                </RadixDropdown.Item>
              ))}
            </RadixDropdown.Group>
            {idx < sections.length - 1 ? (
              <RadixDropdown.Separator className="dropdown-separator" />
            ) : null}
          </React.Fragment>
        ))}
      </RadixDropdown.Content>
    </RadixDropdown.Root>
  );
};

Dropdown.displayName = "Dropdown";
