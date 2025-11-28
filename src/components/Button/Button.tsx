import React from "react";
import { Button as RadixButton } from "@radix-ui/themes";
import type { ButtonProps as RadixButtonProps } from "@radix-ui/themes";
import "./Button.css";

export interface ButtonProps extends Omit<RadixButtonProps, "color"> {
  children: React.ReactNode;
  /**
   * Radix numeric size: "1" | "2" | "3" | "4"
   */
  size?: RadixButtonProps["size"];
  /**
   * Design system color alias; 'accent' maps to theme accent (green)
   */
  color?: RadixButtonProps["color"] | "accent";
  /**
   * Loading state for the button
   */
  loading?: boolean;
  /**
   * Enable glassmorphism effect
   */
  glass?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "solid",
      size = "2",
      color = "accent",
      loading = false,
      glass = false,
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const composedClassName = [
      "gn-Button",
      glass && "gn-Button--glass",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const mappedColor: RadixButtonProps["color"] =
      color === "accent" ? "green" : color;

    return (
      <RadixButton
        ref={ref}
        variant={variant}
        size={size}
        color={mappedColor}
        className={composedClassName}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? "..." : children}
      </RadixButton>
    );
  },
);

Button.displayName = "Button";
