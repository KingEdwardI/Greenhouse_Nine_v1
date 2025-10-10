import React from "react";
import { Button as RadixButton } from "@radix-ui/themes";
import type { ButtonProps as RadixButtonProps } from "@radix-ui/themes";
import "./Button.css";

type DesignSystemSize = "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends Omit<RadixButtonProps, "size" | "color"> {
  children: React.ReactNode;
  /**
   * Design system sizes map to Radix sizes 1, 2, 3
   */
  size?: DesignSystemSize;
  /**
   * Design system color alias; 'accent' maps to theme accent (green)
   */
  color?: RadixButtonProps["color"] | "accent";
  /**
   * Loading state for the button
   */
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "solid",
      size = "md",
      color = "accent",
      loading = false,
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const sizeMap: Record<DesignSystemSize, RadixButtonProps["size"]> = {
      sm: "1",
      md: "2",
      lg: "3",
      xl: "4",
    };

    const mappedSize = sizeMap[size];
    const composedClassName = ["gn-Button", className]
      .filter(Boolean)
      .join(" ");

    const mappedColor: RadixButtonProps["color"] =
      color === "accent" ? "green" : color;

    return (
      <RadixButton
        ref={ref}
        variant={variant}
        size={mappedSize}
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
