import React from "react";
import "./RingSpinner.css";

export interface RingSpinnerProps {
  /**
   * Size of the spinner
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Custom color for the spinner (hex, rgb, or CSS variable)
   */
  color?: string;
  /**
   * Animation speed (1-10 scale)
   * @default 3
   */
  speed?: number;
  /**
   * Enable multicolor mode
   * @default false
   */
  multicolor?: boolean;
  /**
   * Thickness of the ring in pixels
   * @default 4
   */
  thickness?: number;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Style object
   */
  style?: React.CSSProperties;
}

export const RingSpinner = React.forwardRef<HTMLDivElement, RingSpinnerProps>(
  (
    {
      size = "md",
      color,
      speed = 3,
      multicolor = false,
      thickness = 4,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const composedClassName = [
      "gn-RingSpinner",
      `gn-RingSpinner--${size}`,
      multicolor && "gn-RingSpinner--multicolor",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const duration = 4.5 - speed * 0.4;
    const customStyles = {
      ...style,
      "--spinner-duration": `${duration}s`,
      ...(color && { "--gn-spinner-color": color }),
      ...(thickness && { "--gn-spinner-thickness": `${thickness}px` }),
    } as React.CSSProperties;

    return (
      <div
        ref={ref}
        className={composedClassName}
        style={customStyles}
        role="status"
        aria-label="Loading"
        {...props}
      >
        <div className="gn-RingSpinner__ring" />
      </div>
    );
  }
);

RingSpinner.displayName = "RingSpinner";
