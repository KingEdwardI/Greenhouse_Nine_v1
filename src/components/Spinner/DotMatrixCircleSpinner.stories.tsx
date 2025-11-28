import type { Story } from "@ladle/react";
import { DotMatrixCircleSpinner } from "./DotMatrixCircleSpinner";
import type { DotMatrixCircleSpinnerProps } from "./DotMatrixCircleSpinner";
import { colors } from "../../tokens/colors";

export default {
  title: "Feedback - Dot Matrix Circle Spinner",
};

export const Default: Story<DotMatrixCircleSpinnerProps> = (args) => (
  <div style={{ padding: "40px", background: "var(--gray-1)" }}>
    <DotMatrixCircleSpinner {...args} />
  </div>
);

Default.args = {
  size: "md",
  speed: 5,
  dots: 8,
  color: colors.accent,
  multicolor: false,
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
  dots: {
    control: { type: "number", min: 4, max: 16, step: 1 },
    defaultValue: 8,
  },
  color: {
    control: { type: "color" },
    defaultValue: colors.accent,
  },
  multicolor: {
    control: { type: "boolean" },
    defaultValue: false,
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
      <DotMatrixCircleSpinner size="sm" />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}>
        Small
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixCircleSpinner size="md" />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}>
        Medium
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixCircleSpinner size="lg" />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}>
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
      <DotMatrixCircleSpinner color={colors.primary} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}>
        Primary
      </p>
      <p style={{ fontSize: "12px", color: "var(--gray-10)" }}>
        {colors.primary}
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixCircleSpinner color={colors.secondary} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}>
        Secondary
      </p>
      <p style={{ fontSize: "12px", color: "var(--gray-10)" }}>
        {colors.secondary}
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixCircleSpinner color={colors.accent} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}>
        Accent
      </p>
      <p style={{ fontSize: "12px", color: "var(--gray-10)" }}>
        {colors.accent}
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixCircleSpinner color={colors.warning} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}>
        Warning
      </p>
      <p style={{ fontSize: "12px", color: "var(--gray-10)" }}>
        {colors.warning}
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixCircleSpinner color={colors.danger} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}>
        Danger
      </p>
      <p style={{ fontSize: "12px", color: "var(--gray-10)" }}>
        {colors.danger}
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixCircleSpinner color={colors.info} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}>
        Info
      </p>
      <p style={{ fontSize: "12px", color: "var(--gray-10)" }}>
        {colors.info}
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixCircleSpinner color={colors.success} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}>
        Success
      </p>
      <p style={{ fontSize: "12px", color: "var(--gray-10)" }}>
        {colors.success}
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
      <DotMatrixCircleSpinner speed={2} color={colors.primary} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}>
        Slow (speed: 2)
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixCircleSpinner speed={5} color={colors.secondary} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}>
        Normal (speed: 5)
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixCircleSpinner speed={8} color={colors.accent} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}>
        Fast (speed: 8)
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixCircleSpinner speed={10} color={colors.warning} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}>
        Very Fast (speed: 10)
      </p>
    </div>
  </div>
);

export const Dots: Story = () => (
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
      <DotMatrixCircleSpinner dots={6} color={colors.primary} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}>
        6 dots
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixCircleSpinner dots={8} color={colors.secondary} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}>
        8 dots (default)
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixCircleSpinner dots={10} color={colors.accent} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}>
        10 dots
      </p>
    </div>
    <div style={{ textAlign: "center" }}>
      <DotMatrixCircleSpinner dots={12} color={colors.warning} />
      <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--gray-11)" }}>
        12 dots
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
      <DotMatrixCircleSpinner size="md" color={colors.primary} />
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
      <DotMatrixCircleSpinner size="lg" color={colors.accent} dots={10} />
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
      <DotMatrixCircleSpinner size="sm" speed={8} color={colors.secondary} />
    </div>
  </div>
);
