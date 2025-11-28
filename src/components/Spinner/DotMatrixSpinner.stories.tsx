import type { Story } from "@ladle/react";
import { DotMatrixSpinner } from "./DotMatrixSpinner";
import type { DotMatrixSpinnerProps } from "./DotMatrixSpinner";
import { colors } from "../../tokens/colors";

export default {
  title: "Feedback - Dot Matrix Spinner",
};

export const Default: Story<DotMatrixSpinnerProps> = args => (
  <div style={{ padding: "40px", background: "var(--gray-1)" }}>
    <DotMatrixSpinner {...args} />
  </div>
);

Default.args = {
  size: "md",
  speed: 5,
  gridSize: 3,
  color: colors.accent,
};

Default.argTypes = {
  size: {
    options: ["sm", "md", "lg"],
    control: { type: "radio" },
    defaultValue: "md",
  },
  speed: {
    control: { type: "range", min: 1, max: 10, step: 1 },
    defaultValue: 5,
  },
  gridSize: {
    options: [3, 4, 5],
    control: { type: "radio" },
    defaultValue: 3,
  },
  color: {
    control: { type: "color" },
    defaultValue: colors.accent,
  },
};

export const Sizes: Story = () => (
  <div
    style={{
      padding: "40px",
      background: "var(--gray-1)",
      display: "flex",
      gap: "40px",
      alignItems: "center",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <DotMatrixSpinner size="sm" />
      <p
        style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}
      >
        Small
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixSpinner size="md" />
      <p
        style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}
      >
        Medium
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixSpinner size="lg" />
      <p
        style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}
      >
        Large
      </p>
    </div>
  </div>
);

export const Colors: Story = () => (
  <div
    style={{
      padding: "40px",
      background: "var(--gray-1)",
      display: "flex",
      gap: "40px",
      alignItems: "center",
      flexWrap: "wrap",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <DotMatrixSpinner color={colors.primary} />
      <p
        style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}
      >
        Primary
      </p>
      <p style={{ fontSize: "12px", color: "var(--gray-10)" }}>
        {colors.primary}
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixSpinner color={colors.secondary} />
      <p
        style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}
      >
        Secondary
      </p>
      <p style={{ fontSize: "12px", color: "var(--gray-10)" }}>
        {colors.secondary}
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixSpinner color={colors.accent} />
      <p
        style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}
      >
        Accent
      </p>
      <p style={{ fontSize: "12px", color: "var(--gray-10)" }}>
        {colors.accent}
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixSpinner color={colors.warning} />
      <p
        style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}
      >
        Warning
      </p>
      <p style={{ fontSize: "12px", color: "var(--gray-10)" }}>
        {colors.warning}
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixSpinner color={colors.danger} />
      <p
        style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}
      >
        Danger
      </p>
      <p style={{ fontSize: "12px", color: "var(--gray-10)" }}>
        {colors.danger}
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixSpinner color={colors.info} />
      <p
        style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}
      >
        Info
      </p>
      <p style={{ fontSize: "12px", color: "var(--gray-10)" }}>{colors.info}</p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixSpinner color={colors.success} />
      <p
        style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}
      >
        Success
      </p>
      <p style={{ fontSize: "12px", color: "var(--gray-10)" }}>
        {colors.success}
      </p>
    </div>
  </div>
);

export const GridSize: Story = () => (
  <div
    style={{
      padding: "40px",
      background: "var(--gray-1)",
      display: "flex",
      gap: "40px",
      alignItems: "center",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <DotMatrixSpinner gridSize={3} />
      <p
        style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}
      >
        3x3 Grid
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixSpinner gridSize={4} />
      <p
        style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}
      >
        4x4 Grid
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixSpinner gridSize={5} />
      <p
        style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}
      >
        5x5 Grid
      </p>
    </div>
  </div>
);

export const Speeds: Story = () => (
  <div
    style={{
      padding: "40px",
      background: "var(--gray-1)",
      display: "flex",
      gap: "40px",
      alignItems: "center",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <DotMatrixSpinner speed={2} color={colors.primary} />
      <p
        style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}
      >
        Slow (Speed 2)
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixSpinner speed={5} color={colors.secondary} />
      <p
        style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}
      >
        Normal (Speed 5)
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixSpinner speed={8} color={colors.accent} />
      <p
        style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}
      >
        Fast (Speed 8)
      </p>
    </div>
  </div>
);

export const InContext: Story = () => (
  <div
    style={{
      padding: "40px",
      background: "var(--gray-1)",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      maxWidth: "400px",
    }}
  >
    <div
      style={{
        padding: "24px",
        background: "var(--gray-3)",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <DotMatrixSpinner size="md" color={colors.primary} />
      <span style={{ color: "var(--gray-12)" }}>Loading your content...</span>
    </div>

    <div
      style={{
        padding: "24px",
        background: "var(--gray-3)",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <DotMatrixSpinner size="lg" gridSize={4} color={colors.accent} />
      <span style={{ color: "var(--gray-12)", textAlign: "center" }}>
        Processing your request...
      </span>
    </div>

    <div
      style={{
        padding: "24px",
        background: "var(--gray-3)",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <DotMatrixSpinner size="sm" speed={8} color={colors.secondary} />
    </div>
  </div>
);
