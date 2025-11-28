import React from "react";
import { Text as RadixText } from "@radix-ui/themes";
import type { ComponentPropsWithoutRef } from "react";

type RadixTextProps = ComponentPropsWithoutRef<typeof RadixText>;

export interface TextProps extends Omit<RadixTextProps, "size"> {
  /**
   * Radix numeric size: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
   */
  size?: RadixTextProps["size"];
}

export const Text: React.FC<TextProps> = ({
  size = "2",
  className,
  children,
  ...props
}) => {
  const composedClassName = ["gn-Text", className].filter(Boolean).join(" ");
  const forwardedProps = props as RadixTextProps;
  return (
    <RadixText size={size} className={composedClassName} {...forwardedProps}>
      {children}
    </RadixText>
  );
};

Text.displayName = "Text";
