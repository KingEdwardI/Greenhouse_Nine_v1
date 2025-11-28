import React from "react";
import "./DotMatrixDiamondSpinner.css";

export interface DotMatrixDiamondSpinnerProps {
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
   * Additional CSS class name
   */
  className?: string;
}

export const DotMatrixDiamondSpinner = React.forwardRef<
  HTMLDivElement,
  DotMatrixDiamondSpinnerProps
>(
  (
    {
      size = "md",
      speed = 5,
      color = "var(--accent-9)",
      multicolor = false,
      className,
      ...props
    },
    ref
  ) => {
    // Calculate duration based on speed (1-10 scale)
    const duration = 4.5 - speed * 0.4;

    const composedClassName = [
      "gn-DotMatrixDiamondSpinner",
      `gn-DotMatrixDiamondSpinner--${size}`,
      multicolor && "gn-DotMatrixDiamondSpinner--multicolor",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // Diamond pattern: 1, 3, 5, 3, 1 dots per row
    // Total: 13 dots arranged in a diamond shape
    const diamondPattern = [
      { row: 0, cols: [0] }, // Top: 1 dot
      { row: 1, cols: [-1, 0, 1] }, // 3 dots
      { row: 2, cols: [-2, -1, 0, 1, 2] }, // Middle: 5 dots
      { row: 3, cols: [-1, 0, 1] }, // 3 dots
      { row: 4, cols: [0] }, // Bottom: 1 dot
    ];

    let dotIndex = 0;
    const dotElements: React.ReactElement[] = [];

    diamondPattern.forEach(({ row, cols }) => {
      cols.forEach(col => {
        const distanceFromCenter = Math.abs(row - 2) + Math.abs(col);
        const delay = (distanceFromCenter / 4) * duration;

        // For multicolor, calculate hue offset based on distance from center
        const hueOffset = multicolor ? (distanceFromCenter / 4) * 360 : 0;

        dotElements.push(
          <div
            key={dotIndex}
            className="gn-DotMatrixDiamondSpinner__dot"
            style={
              {
                "--dot-color": color,
                "--animation-delay": `${delay}s`,
                "--animation-duration": `${duration}s`,
                "--diamond-row": row,
                "--diamond-col": col,
                "--hue-offset": `${hueOffset}deg`,
              } as React.CSSProperties
            }
          />
        );
        dotIndex++;
      });
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

DotMatrixDiamondSpinner.displayName = "DotMatrixDiamondSpinner";
