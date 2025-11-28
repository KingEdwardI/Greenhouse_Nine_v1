import React from "react";
import "./OrbitalSpinner.css";

export interface OrbitalSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  speed?: number;
  multicolor?: boolean;
  className?: string;
}

export const OrbitalSpinner = React.forwardRef<
  HTMLDivElement,
  OrbitalSpinnerProps
>(
  (
    { size = "md", color, speed = 5, multicolor = false, className, ...props },
    ref
  ) => {
    const composedClassName = [
      "gn-OrbitalSpinner",
      `gn-OrbitalSpinner--${size}`,
      multicolor && "gn-OrbitalSpinner--multicolor",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const duration = 4.5 - speed * 0.4;
    const style: React.CSSProperties = {
      "--spinner-duration": `${duration}s`,
      ...(color && { "--spinner-color": color }),
    } as React.CSSProperties;

    return (
      <div
        ref={ref}
        className={composedClassName}
        style={style}
        role="status"
        aria-label="Loading"
        {...props}
      >
        <div className="gn-OrbitalSpinner__orbit">
          <div className="gn-OrbitalSpinner__dot gn-OrbitalSpinner__dot--1" />
          <div className="gn-OrbitalSpinner__dot gn-OrbitalSpinner__dot--2" />
          <div className="gn-OrbitalSpinner__dot gn-OrbitalSpinner__dot--3" />
          <div className="gn-OrbitalSpinner__dot gn-OrbitalSpinner__dot--4" />
        </div>
      </div>
    );
  }
);

OrbitalSpinner.displayName = "OrbitalSpinner";
