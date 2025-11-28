import React from "react";
import { Switch as RadixSwitch } from "@radix-ui/themes";
import type { SwitchProps as RadixSwitchProps } from "@radix-ui/themes";

export interface SwitchProps extends Omit<RadixSwitchProps, "children"> {
  /**
   * Radix numeric size: "1" | "2" | "3"
   */
  size?: RadixSwitchProps["size"];
  label?: React.ReactNode;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ size = "2", label, ...props }, ref) => {
    if (label) {
      return (
        <label style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <RadixSwitch ref={ref} size={size} {...props} />
          <span>{label}</span>
        </label>
      );
    }
    return <RadixSwitch ref={ref} size={size} {...props} />;
  }
);

Switch.displayName = "Switch";
