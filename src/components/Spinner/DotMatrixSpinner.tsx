import React from "react";
import "./DotMatrixSpinner.css";

export interface DotMatrixSpinnerProps {
  /**
   * Size variant of the spinner
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Color of the spinner dots
   * @default "var(--accent-9)"
   */
  color?: string;
  /**
   * Animation speed (1-10 scale)
   * @default 5
   */
  speed?: number;
  /**
   * Enable multicolor mode
   * @default false
   */
  multicolor?: boolean;
  /**
   * Grid size (number of dots per side)
   * @default 3
   */
  gridSize?: 3 | 4 | 5;
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const DotMatrixSpinner = React.forwardRef<
  HTMLDivElement,
  DotMatrixSpinnerProps
>(
  (
    {
      size = "md",
      color = "var(--accent-9)",
      speed = 5,
      multicolor = false,
      gridSize = 3,
      className,
      ...props
    },
    ref,
  ) => {
    const duration = 4.5 - (speed * 0.4);

    const composedClassName = [
      "gn-DotMatrixSpinner",
      `gn-DotMatrixSpinner--${size}`,
      `gn-DotMatrixSpinner--grid-${gridSize}`,
      multicolor && "gn-DotMatrixSpinner--multicolor",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // Generate dots based on gridSize
    const dots = Array.from({ length: gridSize * gridSize }, (_, index) => {
      const row = Math.floor(index / gridSize);
      const col = index % gridSize;
      const delay = (row + col) * 0.1; // Staggered delay based on position

      // For multicolor, calculate hue offset based on position
      const hueOffset = multicolor ? ((row + col) / (gridSize * 2)) * 360 : 0;

      return (
        <div
          key={index}
          className="gn-DotMatrixSpinner__dot"
          style={{
            "--dot-color": color,
            "--animation-delay": `${delay}s`,
            "--spinner-duration": `${duration}s`,
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
        {dots}
      </div>
    );
  },
);

DotMatrixSpinner.displayName = "DotMatrixSpinner";
