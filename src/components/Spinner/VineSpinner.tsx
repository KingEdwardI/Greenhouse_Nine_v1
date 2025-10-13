import React from "react";
import "./VineSpinner.css";

export type VineGrowthPattern = "curved" | "spiral" | "wavy" | "straight";
export type VineVariant = "default" | "spring" | "summer" | "autumn" | "winter";

export interface VineSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  speed?: number;
  multicolor?: boolean;
  vines?: number;
  className?: string;
  /** Shows flowers blooming at vine tips */
  showBlossoms?: boolean;
  /** Growth pattern of the vines */
  growthPattern?: VineGrowthPattern;
  /** Adds a subtle glow effect */
  glow?: boolean;
  /** Shows sparkle effects on leaves like dew drops */
  showDewdrops?: boolean;
  /** Adds gentle swaying motion like wind */
  windEffect?: boolean;
  /** Shows roots growing downward */
  showRoots?: boolean;
  /** Deterministic progress (0-100) instead of infinite animation */
  progress?: number;
  /** Seasonal preset color schemes */
  variant?: VineVariant;
  /** Aria label for screen readers */
  "aria-label"?: string;
}

const VARIANT_COLORS: Record<VineVariant, string> = {
  default: "#2E8B57",
  spring: "#9ACD32", // Yellow green
  summer: "#228B22", // Forest green
  autumn: "#D2691E", // Chocolate/autumn
  winter: "#4682B4", // Steel blue
};

const GROWTH_PATTERNS: Record<VineGrowthPattern, string> = {
  curved: "M 50 90 Q 30 60, 50 30 Q 70 10, 50 0",
  spiral: "M 50 90 Q 20 70, 35 50 Q 55 30, 45 15 Q 60 5, 50 0",
  wavy: "M 50 90 Q 35 75, 50 60 Q 65 45, 50 30 Q 35 15, 50 0",
  straight: "M 50 90 L 50 0",
};

export const VineSpinner = React.forwardRef<HTMLDivElement, VineSpinnerProps>(
  (
    {
      size = "md",
      color,
      speed = 5,
      multicolor = false,
      vines = 3,
      className,
      showBlossoms = false,
      growthPattern = "curved",
      glow = false,
      showDewdrops = false,
      windEffect = false,
      showRoots = false,
      progress,
      variant = "default",
      "aria-label": ariaLabel = "Loading",
      ...props
    },
    ref,
  ) => {
    const duration = 4.5 - (speed * 0.4);
    const isDeterministic = progress !== undefined;
    const normalizedProgress = isDeterministic
      ? Math.max(0, Math.min(100, progress))
      : 100;

    const effectiveColor = color || VARIANT_COLORS[variant];

    const composedClassName = [
      "gn-VineSpinner",
      `gn-VineSpinner--${size}`,
      multicolor && "gn-VineSpinner--multicolor",
      glow && "gn-VineSpinner--glow",
      windEffect && "gn-VineSpinner--wind",
      isDeterministic && "gn-VineSpinner--deterministic",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const vineElements = Array.from({ length: vines }, (_, i) => i);
    const stemPath = GROWTH_PATTERNS[growthPattern];

    return (
      <div
        ref={ref}
        className={composedClassName}
        role="status"
        aria-label={ariaLabel}
        aria-valuenow={isDeterministic ? normalizedProgress : undefined}
        aria-valuemin={isDeterministic ? 0 : undefined}
        aria-valuemax={isDeterministic ? 100 : undefined}
        style={{
          "--spinner-duration": `${duration}s`,
          "--vine-color": effectiveColor,
          "--progress": normalizedProgress / 100,
        } as React.CSSProperties}
        {...props}
      >
        <div className="gn-VineSpinner__container">
          {vineElements.map((index) => {
            // For multicolor, calculate hue offset for each vine (120° apart for 3 vines)
            const hueOffset = multicolor ? (index / vines) * 360 : 0;

            return (
              <div
                key={index}
                className="gn-VineSpinner__vine"
                style={{
                  "--vine-index": index,
                  "--hue-offset": `${hueOffset}deg`,
                } as React.CSSProperties}
                >
                <svg viewBox="0 0 100 120" className="gn-VineSpinner__svg">
                  {/* Roots (optional) */}
                  {showRoots && (
                    <g className="gn-VineSpinner__roots">
                      <path
                        className="gn-VineSpinner__root gn-VineSpinner__root--1"
                        d="M 50 90 Q 40 100, 35 110"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        className="gn-VineSpinner__root gn-VineSpinner__root--2"
                        d="M 50 90 Q 60 100, 65 110"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        className="gn-VineSpinner__root gn-VineSpinner__root--3"
                        d="M 50 90 L 50 105"
                        fill="none"
                        strokeWidth="1"
                        strokeLinecap="round"
                      />
                    </g>
                  )}

                  {/* Main vine stem */}
                  <path
                    className="gn-VineSpinner__stem"
                    d={stemPath}
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  {/* Leaves */}
                  <g className="gn-VineSpinner__leaves">
                    {/* Left leaf 1 */}
                    <ellipse
                      className="gn-VineSpinner__leaf gn-VineSpinner__leaf--1"
                      cx="35"
                      cy="65"
                      rx="8"
                      ry="12"
                      transform="rotate(-30 35 65)"
                    />

                    {/* Right leaf 1 */}
                    <ellipse
                      className="gn-VineSpinner__leaf gn-VineSpinner__leaf--2"
                      cx="65"
                      cy="50"
                      rx="8"
                      ry="12"
                      transform="rotate(30 65 50)"
                    />

                    {/* Left leaf 2 */}
                    <ellipse
                      className="gn-VineSpinner__leaf gn-VineSpinner__leaf--3"
                      cx="35"
                      cy="35"
                      rx="8"
                      ry="12"
                      transform="rotate(-30 35 35)"
                    />

                    {/* Right leaf 2 */}
                    <ellipse
                      className="gn-VineSpinner__leaf gn-VineSpinner__leaf--4"
                      cx="65"
                      cy="20"
                      rx="8"
                      ry="12"
                      transform="rotate(30 65 20)"
                    />

                    {/* Dewdrops (optional sparkles) */}
                    {showDewdrops && (
                      <>
                        <circle
                          className="gn-VineSpinner__dewdrop gn-VineSpinner__dewdrop--1"
                          cx="38"
                          cy="68"
                          r="1.5"
                        />
                        <circle
                          className="gn-VineSpinner__dewdrop gn-VineSpinner__dewdrop--2"
                          cx="62"
                          cy="53"
                          r="1.5"
                        />
                        <circle
                          className="gn-VineSpinner__dewdrop gn-VineSpinner__dewdrop--3"
                          cx="38"
                          cy="38"
                          r="1.5"
                        />
                      </>
                    )}
                  </g>

                  {/* Tendril/curl at top */}
                  <path
                    className="gn-VineSpinner__tendril"
                    d="M 50 0 Q 45 -5, 50 -10 Q 55 -15, 50 -20"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  {/* Blossom (optional flower) */}
                  {showBlossoms && (
                    <g className="gn-VineSpinner__blossom">
                      {/* Flower petals */}
                      <circle cx="50" cy="-5" r="4" className="gn-VineSpinner__petal gn-VineSpinner__petal--1" />
                      <circle cx="55" cy="-8" r="4" className="gn-VineSpinner__petal gn-VineSpinner__petal--2" />
                      <circle cx="58" cy="-13" r="4" className="gn-VineSpinner__petal gn-VineSpinner__petal--3" />
                      <circle cx="55" cy="-18" r="4" className="gn-VineSpinner__petal gn-VineSpinner__petal--4" />
                      <circle cx="50" cy="-21" r="4" className="gn-VineSpinner__petal gn-VineSpinner__petal--5" />
                      <circle cx="45" cy="-18" r="4" className="gn-VineSpinner__petal gn-VineSpinner__petal--6" />
                      <circle cx="42" cy="-13" r="4" className="gn-VineSpinner__petal gn-VineSpinner__petal--7" />
                      <circle cx="45" cy="-8" r="4" className="gn-VineSpinner__petal gn-VineSpinner__petal--8" />
                      {/* Flower center */}
                      <circle cx="50" cy="-13" r="3.5" className="gn-VineSpinner__flowerCenter" />
                    </g>
                  )}
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);

VineSpinner.displayName = "VineSpinner";
