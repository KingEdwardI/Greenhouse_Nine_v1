import React from "react";
import { Checkbox as RadixCheckbox } from "@radix-ui/themes";
import type { CheckboxProps as RadixCheckboxProps } from "@radix-ui/themes";

export interface CheckboxProps extends Omit<RadixCheckboxProps, "children"> {
  /**
   * Radix numeric size: "1" | "2" | "3"
   */
  size?: RadixCheckboxProps["size"];
  label?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ size = "2", label, ...props }, ref) => {
    if (label) {
      return (
        <label style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <RadixCheckbox ref={ref} size={size} {...props} />
          <span>{label}</span>
        </label>
      );
    }
    return <RadixCheckbox ref={ref} size={size} {...props} />;
  }
);

Checkbox.displayName = "Checkbox";
