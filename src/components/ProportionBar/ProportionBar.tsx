import React, { useState, useRef } from "react";
import "./ProportionBar.css";

export interface ProportionBarSegment {
  /** Unique identifier for the segment */
  id: string;
  /** Display label for the segment */
  label: string;
  /** Value (will be converted to percentage of total) */
  value: number;
  /** Color for the segment (CSS color value) */
  color: string;
}

export interface ProportionBarProps {
  /** Array of segments to display */
  segments: ProportionBarSegment[];
  /** Orientation of the bar */
  orientation?: "horizontal" | "vertical";
  /** Height of horizontal bar or width of vertical bar */
  size?: string;
  /** Length of the bar (width for horizontal, height for vertical) */
  length?: string;
  /** Optional click handler for segments */
  onClick?: (segment: ProportionBarSegment, event: React.MouseEvent) => void;
  /** Additional CSS class */
  className?: string;
  /** Border radius for the bar */
  radius?: "none" | "small" | "medium" | "large" | "full";
  /** Show percentage in tooltip */
  showPercentage?: boolean;
}

export const ProportionBar = React.forwardRef<
  HTMLDivElement,
  ProportionBarProps
>(
  (
    {
      segments,
      orientation = "horizontal",
      size = "8px",
      length = "100%",
      onClick,
      className,
      radius = "medium",
      showPercentage = true,
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredSegmentIndex, setHoveredSegmentIndex] = useState<
      number | null
    >(null);

    const total = segments.reduce((sum, seg) => sum + seg.value, 0);

    const getPercentage = (value: number) => {
      if (total === 0) return 0;
      return (value / total) * 100;
    };

    // Calculate the center position of a segment as a percentage
    const getSegmentCenterPosition = (segmentIndex: number): number => {
      let positionBefore = 0;
      for (let i = 0; i < segmentIndex; i++) {
        positionBefore += getPercentage(segments[i].value);
      }
      const segmentWidth = getPercentage(segments[segmentIndex].value);
      return positionBefore + segmentWidth / 2;
    };

    const radiusMap = {
      none: "0",
      small: "2px",
      medium: "4px",
      large: "8px",
      full: "9999px",
    };

    const handleMouseEnter = (segmentIndex: number) => {
      setHoveredSegmentIndex(segmentIndex);
    };

    const handleMouseLeave = () => {
      setHoveredSegmentIndex(null);
    };

    const composedClassName = [
      "gn-ProportionBar",
      `gn-ProportionBar--${orientation}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const barStyle: React.CSSProperties =
      orientation === "horizontal"
        ? { height: size, width: length }
        : { width: size, height: length };

    // Merge forwarded ref with internal ref
    const setRefs = (node: HTMLDivElement | null) => {
      (containerRef as React.MutableRefObject<HTMLDivElement | null>).current =
        node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

    return (
      <div
        ref={setRefs}
        className={composedClassName}
        style={{
          ...barStyle,
          borderRadius: radiusMap[radius],
        }}
      >
        <div className="gn-ProportionBar__track">
          {segments.map((segment, index) => {
            const percentage = getPercentage(segment.value);
            if (percentage === 0) return null;

            const segmentStyle: React.CSSProperties = {
              backgroundColor: segment.color,
              ...(orientation === "horizontal"
                ? { width: `${percentage}%` }
                : { height: `${percentage}%` }),
            };

            return (
              <div
                key={segment.id}
                className={`gn-ProportionBar__segment ${
                  onClick ? "gn-ProportionBar__segment--clickable" : ""
                }`}
                style={segmentStyle}
                onClick={e => onClick?.(segment, e)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />
            );
          })}
        </div>

        {hoveredSegmentIndex !== null && (
          <div
            className="gn-ProportionBar__tooltip"
            style={{
              left:
                orientation === "horizontal"
                  ? `${getSegmentCenterPosition(hoveredSegmentIndex)}%`
                  : "100%",
              top:
                orientation === "vertical"
                  ? `${getSegmentCenterPosition(hoveredSegmentIndex)}%`
                  : undefined,
              bottom: orientation === "horizontal" ? "100%" : undefined,
              marginLeft: orientation === "vertical" ? "8px" : undefined,
              marginBottom: orientation === "horizontal" ? "8px" : undefined,
              transform:
                orientation === "horizontal"
                  ? "translateX(-50%)"
                  : "translateY(-50%)",
            }}
          >
            <span
              className="gn-ProportionBar__tooltip-color"
              style={{ backgroundColor: segments[hoveredSegmentIndex].color }}
            />
            <span className="gn-ProportionBar__tooltip-label">
              {segments[hoveredSegmentIndex].label}
            </span>
            {showPercentage && (
              <span className="gn-ProportionBar__tooltip-percentage">
                {getPercentage(segments[hoveredSegmentIndex].value).toFixed(1)}%
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);

ProportionBar.displayName = "ProportionBar";
