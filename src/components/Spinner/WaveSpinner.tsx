import React from "react";
import "./WaveSpinner.css";

export interface WaveSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  speed?: number;
  multicolor?: boolean;
  bars?: number;
  className?: string;
}

export const WaveSpinner = React.forwardRef<HTMLDivElement, WaveSpinnerProps>(
  (
    {
      size = "md",
      color,
      speed = 5,
      multicolor = false,
      bars = 5,
      className,
      ...props
    },
    ref,
  ) => {
    const duration = 4.5 - (speed * 0.4);

    const composedClassName = [
      "gn-WaveSpinner",
      `gn-WaveSpinner--${size}`,
      multicolor && "gn-WaveSpinner--multicolor",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // Generate array of bars
    const barElements = Array.from({ length: bars }, (_, index) => {
      // For multicolor, calculate hue offset for each bar
      const hueOffset = multicolor ? (index / bars) * 360 : 0;

      return (
        <div
          key={index}
          className="gn-WaveSpinner__bar"
          style={{
            "--spinner-duration": `${duration}s`,
            "--animation-delay": `${index * 0.1}s`,
            "--hue-offset": `${hueOffset}deg`,
            ...(color && { backgroundColor: color }),
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
        style={
          color
            ? ({ "--gn-wave-spinner-color": color } as React.CSSProperties)
            : undefined
        }
        {...props}
      >
        {barElements}
      </div>
    );
  },
);

WaveSpinner.displayName = "WaveSpinner";
