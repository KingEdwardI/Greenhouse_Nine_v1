import React from "react";
import { TextField as RadixTextField } from "@radix-ui/themes";
import type { TextField as RadixTextFieldNS } from "@radix-ui/themes";
import "./Input.css";

export interface InputProps extends RadixTextFieldNS.RootProps {
  /**
   * Radix numeric size: "1" | "2" | "3"
   */
  size?: RadixTextFieldNS.RootProps["size"];
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size = "2", className, ...props }, ref) => {
    const composedClassName = ["gn-Input", className].filter(Boolean).join(" ");

    return (
      <RadixTextField.Root
        ref={ref}
        size={size}
        className={composedClassName}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
