import React from "react";
import "./DotMatrixCircleSpinner.css";

export interface DotMatrixCircleSpinnerProps {
  /**
   * Size variant of the spinner
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Animation speed (1-10 scale)
   * @default 5
   */
  speed?: number;
  /**
   * Color of the spinner dots
   * @default "var(--accent-9)"
   */
  color?: string;
  /**
   * Enable multicolor mode using brand colors
   * @default false
   */
  multicolor?: boolean;
  /**
   * Number of dots in the circle
   * @default 8
   */
  dots?: number;
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const DotMatrixCircleSpinner = React.forwardRef<
  HTMLDivElement,
  DotMatrixCircleSpinnerProps
>(
  (
    {
      size = "md",
      speed = 5,
      color = "var(--accent-9)",
      multicolor = false,
      dots = 8,
      className,
      ...props
    },
    ref,
  ) => {
    // Calculate duration based on speed (1-10 scale)
    const duration = 4.5 - (speed * 0.4);

    const composedClassName = [
      "gn-DotMatrixCircleSpinner",
      `gn-DotMatrixCircleSpinner--${size}`,
      multicolor && "gn-DotMatrixCircleSpinner--multicolor",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // Generate dots positioned in a circle
    const dotElements = Array.from({ length: dots }, (_, index) => {
      const angle = (index / dots) * 2 * Math.PI - Math.PI / 2; // Start from top
      const delay = (index / dots) * duration;

      // For multicolor, calculate hue offset for each dot in the circle
      const hueOffset = multicolor ? (index / dots) * 360 : 0;

      return (
        <div
          key={index}
          className="gn-DotMatrixCircleSpinner__dot"
          style={{
            "--dot-color": color,
            "--animation-delay": `${delay}s`,
            "--animation-duration": `${duration}s`,
            "--angle": `${angle}rad`,
            "--hue-offset": `${hueOffset}deg`,
          } as React.CSSProperties}
        />
      );
    });

    return (
      <div
        ref={ref}
        className={composedClassName}
        role="status"
        aria-label="Loading"
        {...props}
      >
        {dotElements}
      </div>
    );
  },
);

DotMatrixCircleSpinner.displayName = "DotMatrixCircleSpinner";
