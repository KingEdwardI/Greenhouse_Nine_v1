import type { Story } from "@ladle/react";
import { VineSpinner } from "./VineSpinner";
import type { VineSpinnerProps } from "./VineSpinner";
import { useState, useEffect } from "react";

export default {
  title: "Feedback/VineSpinner",
};

export const Playground: Story<VineSpinnerProps> = (args) => (
  <div
    style={{
      padding: "60px",
      background: "var(--gray-1)",
      minHeight: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <VineSpinner {...args} />
  </div>
);

Playground.args = {
  size: "lg",
  speed: 5,
  vines: 3,
  multicolor: false,
  showBlossoms: false,
  growthPattern: "curved",
  glow: false,
  showDewdrops: false,
  windEffect: false,
  showRoots: false,
  variant: "default",
};

Playground.argTypes = {
  size: {
    control: { type: "select" },
    options: ["sm", "md", "lg"],
    description: "Size of the spinner",
  },
  speed: {
    control: { type: "range", min: 1, max: 10, step: 1 },
    description: "Animation speed (1-10)",
  },
  vines: {
    control: { type: "range", min: 1, max: 6, step: 1 },
    description: "Number of vines",
  },
  multicolor: {
    control: { type: "boolean" },
    description: "Enable rainbow color cycling",
  },
  variant: {
    control: { type: "select" },
    options: ["default", "spring", "summer", "autumn", "winter"],
    description: "Seasonal color preset",
  },
  color: {
    control: { type: "color" },
    description: "Custom color (overrides variant)",
  },
  growthPattern: {
    control: { type: "select" },
    options: ["curved", "spiral", "wavy", "straight"],
    description: "Vine growth pattern",
  },
  showBlossoms: {
    control: { type: "boolean" },
    description: "Show flowers at vine tips",
  },
  glow: {
    control: { type: "boolean" },
    description: "Add luminescent glow effect",
  },
  showDewdrops: {
    control: { type: "boolean" },
    description: "Show sparkling dewdrops on leaves",
  },
  windEffect: {
    control: { type: "boolean" },
    description: "Add gentle swaying motion",
  },
  showRoots: {
    control: { type: "boolean" },
    description: "Show growing roots at base",
  },
  progress: {
    control: { type: "range", min: 0, max: 100, step: 5 },
    description: "Deterministic progress (0-100, undefined for infinite)",
  },
};

// Preset combinations for quick exploration
export const PresetCombinations: Story = () => {
  const presets = {
    enchanted: {
      name: "Enchanted Garden",
      description: "Full magical experience",
      props: {
        size: "lg" as const,
        variant: "spring" as const,
        showBlossoms: true,
        showDewdrops: true,
        windEffect: true,
        glow: true,
        vines: 3,
        speed: 4,
        growthPattern: "curved" as const,
      },
    },
    rainbow: {
      name: "Rainbow Spiral",
      description: "Multicolor with spiral pattern",
      props: {
        size: "lg" as const,
        multicolor: true,
        showBlossoms: true,
        showRoots: true,
        growthPattern: "spiral" as const,
        vines: 4,
        speed: 6,
      },
    },
    autumn: {
      name: "Autumn Breeze",
      description: "Fall themed with wind",
      props: {
        size: "lg" as const,
        variant: "autumn" as const,
        windEffect: true,
        growthPattern: "wavy" as const,
        vines: 3,
        speed: 3,
      },
    },
    minimal: {
      name: "Minimal",
      description: "Clean and simple",
      props: {
        size: "md" as const,
        variant: "default" as const,
        growthPattern: "straight" as const,
        vines: 1,
        speed: 5,
      },
    },
    summer: {
      name: "Summer Glow",
      description: "Bright summer day",
      props: {
        size: "lg" as const,
        variant: "summer" as const,
        glow: true,
        showBlossoms: true,
        vines: 3,
        speed: 7,
      },
    },
    roots: {
      name: "Full Growth",
      description: "Complete plant lifecycle",
      props: {
        size: "lg" as const,
        variant: "default" as const,
        showRoots: true,
        showBlossoms: true,
        growthPattern: "curved" as const,
        vines: 2,
        speed: 5,
      },
    },
  };

  type PresetKey = keyof typeof presets;
  const [activePreset, setActivePreset] = useState<PresetKey>("enchanted");

  return (
    <div
      style={{
        padding: "40px",
        background: "var(--gray-1)",
        minHeight: "500px",
      }}
    >
      {/* Preset selector */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Object.entries(presets).map(([key, preset]) => (
          <button
            key={key}
            onClick={() => setActivePreset(key as PresetKey)}
            style={{
              padding: "8px 16px",
              background: activePreset === key ? "var(--accent-9)" : "var(--gray-3)",
              color: activePreset === key ? "white" : "var(--gray-12)",
              border: "1px solid",
              borderColor: activePreset === key ? "var(--accent-10)" : "var(--gray-6)",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "all 0.2s",
              fontSize: "14px",
              fontWeight: activePreset === key ? 600 : 400,
            }}
          >
            {preset.name}
          </button>
        ))}
      </div>

      {/* Active preset display */}
      <div
        style={{
          background: "var(--gray-3)",
          borderRadius: "12px",
          padding: "40px",
          textAlign: "center",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <VineSpinner {...presets[activePreset].props} />
        <h3
          style={{
            color: "var(--gray-12)",
            marginTop: "24px",
            marginBottom: "8px",
            fontSize: "20px",
          }}
        >
          {presets[activePreset].name}
        </h3>
        <p
          style={{
            color: "var(--gray-11)",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          {presets[activePreset].description}
        </p>

        {/* Configuration display */}
        <div
          style={{
            background: "var(--gray-2)",
            borderRadius: "8px",
            padding: "16px",
            textAlign: "left",
            fontSize: "12px",
            fontFamily: "monospace",
            color: "var(--gray-11)",
          }}
        >
          <div style={{ marginBottom: "8px", color: "var(--gray-10)" }}>Configuration:</div>
          {Object.entries(presets[activePreset].props).map(([key, value]) => (
            <div key={key} style={{ lineHeight: "1.6" }}>
              <span style={{ color: "var(--accent-9)" }}>{key}</span>:{" "}
              <span style={{ color: "var(--gray-12)" }}>
                {typeof value === "string" ? `"${value}"` : String(value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProgressDemo: Story = () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsRunning(false);
            return 100;
          }
          return Math.min(100, prev + 2);
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const handleStart = () => {
    setProgress(0);
    setIsRunning(true);
  };

  const handleReset = () => {
    setProgress(0);
    setIsRunning(false);
  };

  return (
    <div
      style={{
        padding: "40px",
        background: "var(--gray-1)",
        minHeight: "400px",
      }}
    >
      <div
        style={{
          background: "var(--gray-3)",
          borderRadius: "12px",
          padding: "40px",
          maxWidth: "500px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <VineSpinner
          size="lg"
          progress={progress}
          showBlossoms={progress > 75}
          showRoots
          variant="spring"
          glow={progress === 100}
        />

        <h3
          style={{
            color: "var(--gray-12)",
            marginTop: "24px",
            marginBottom: "8px",
            fontSize: "18px",
          }}
        >
          {progress === 0 && !isRunning && "Ready to grow"}
          {isRunning && progress < 100 && "Growing..."}
          {progress === 100 && "Growth complete!"}
        </h3>

        {/* Progress bar */}
        <div
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            height: "8px",
            background: "var(--gray-5)",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              background: `linear-gradient(90deg, var(--accent-9), var(--accent-10))`,
              width: `${progress}%`,
              transition: "width 0.2s ease",
            }}
          />
        </div>

        <div
          style={{
            color: "var(--gray-11)",
            fontSize: "16px",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          {progress}%
        </div>

        {/* Controls */}
        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <button
            onClick={handleStart}
            disabled={isRunning}
            style={{
              padding: "10px 24px",
              background: isRunning ? "var(--gray-5)" : "var(--accent-9)",
              color: isRunning ? "var(--gray-8)" : "white",
              border: "none",
              borderRadius: "6px",
              cursor: isRunning ? "not-allowed" : "pointer",
              fontSize: "14px",
              fontWeight: 500,
              transition: "all 0.2s",
            }}
          >
            Start Growth
          </button>
          <button
            onClick={handleReset}
            style={{
              padding: "10px 24px",
              background: "var(--gray-3)",
              color: "var(--gray-12)",
              border: "1px solid var(--gray-6)",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 500,
              transition: "all 0.2s",
            }}
          >
            Reset
          </button>
        </div>

        {/* Manual progress control */}
        <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid var(--gray-5)" }}>
          <label
            style={{
              display: "block",
              color: "var(--gray-11)",
              fontSize: "12px",
              marginBottom: "8px",
              textAlign: "left",
            }}
          >
            Manual Progress Control
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => {
              setProgress(Number(e.target.value));
              setIsRunning(false);
            }}
            style={{
              width: "100%",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const SizeComparison: Story = () => (
  <div
    style={{
      padding: "40px",
      background: "var(--gray-1)",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "32px",
      maxWidth: "800px",
      margin: "0 auto",
    }}
  >
    <div
      style={{
        background: "var(--gray-3)",
        padding: "24px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <VineSpinner size="sm" showBlossoms variant="spring" />
      <p style={{ color: "var(--gray-11)", marginTop: "16px", fontSize: "14px" }}>
        Small (32px)
      </p>
    </div>
    <div
      style={{
        background: "var(--gray-3)",
        padding: "24px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <VineSpinner size="md" showBlossoms variant="summer" />
      <p style={{ color: "var(--gray-11)", marginTop: "16px", fontSize: "14px" }}>
        Medium (48px)
      </p>
    </div>
    <div
      style={{
        background: "var(--gray-3)",
        padding: "24px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <VineSpinner size="lg" showBlossoms variant="autumn" />
      <p style={{ color: "var(--gray-11)", marginTop: "16px", fontSize: "14px" }}>
        Large (72px)
      </p>
    </div>
  </div>
);