import React from "react";
import "./DotMatrixSpiralSpinner.css";

export interface DotMatrixSpiralSpinnerProps {
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
   * Direction of animation flow
   * @default "outward"
   */
  direction?: "inward" | "outward";
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const DotMatrixSpiralSpinner = React.forwardRef<
  HTMLDivElement,
  DotMatrixSpiralSpinnerProps
>(
  (
    {
      size = "md",
      speed = 5,
      color = "var(--accent-9)",
      multicolor = false,
      direction = "outward",
      className,
      ...props
    },
    ref
  ) => {
    // Calculate duration based on speed (1-10 scale)
    const duration = 4.5 - speed * 0.4;

    const composedClassName = [
      "gn-DotMatrixSpiralSpinner",
      `gn-DotMatrixSpiralSpinner--${size}`,
      `gn-DotMatrixSpiralSpinner--${direction}`,
      multicolor && "gn-DotMatrixSpiralSpinner--multicolor",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // Generate spiral coordinates (Archimedean spiral)
    const spiralDots = 20;
    const maxRadius = 1; // Will be scaled by CSS

    const dotElements = Array.from({ length: spiralDots }, (_, index) => {
      const t = index / spiralDots;
      const angle = t * 4 * Math.PI; // 2 full rotations
      const radius = t * maxRadius;

      // Delay based on direction
      const baseDelay = direction === "outward" ? t : 1 - t;
      const delay = baseDelay * duration;

      // For multicolor, calculate hue offset based on position along spiral
      const hueOffset = multicolor ? t * 360 : 0;

      return (
        <div
          key={index}
          className="gn-DotMatrixSpiralSpinner__dot"
          style={
            {
              "--dot-color": color,
              "--animation-delay": `${delay}s`,
              "--animation-duration": `${duration}s`,
              "--spiral-angle": `${angle}rad`,
              "--spiral-radius": radius,
              "--hue-offset": `${hueOffset}deg`,
            } as React.CSSProperties
          }
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
  }
);

DotMatrixSpiralSpinner.displayName = "DotMatrixSpiralSpinner";
