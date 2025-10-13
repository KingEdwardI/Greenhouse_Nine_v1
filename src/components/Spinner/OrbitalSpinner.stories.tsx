import type { Story } from "@ladle/react";
import { OrbitalSpinner } from "./OrbitalSpinner";
import type { OrbitalSpinnerProps } from "./OrbitalSpinner";
import { colors } from "../../tokens/colors";

export default {
  title: "Feedback/OrbitalSpinner",
};

export const Default: Story<OrbitalSpinnerProps> = (args) => (
  <div style={{ padding: "40px", background: "var(--gray-1)", display: "flex", justifyContent: "center" }}>
    <OrbitalSpinner {...args} />
  </div>
);

Default.args = {
  size: "md",
  speed: 5,
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
  color: {
    control: { type: "text" },
  },
};

export const Sizes: Story = () => (
  <div
    style={{
      padding: "40px",
      background: "var(--gray-1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "40px",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <OrbitalSpinner size="sm" />
      <div style={{ marginTop: "12px", fontSize: "12px", color: "var(--gray-11)" }}>Small</div>
    </div>
    <div style={{ textAlign: "center" }}>
      <OrbitalSpinner size="md" />
      <div style={{ marginTop: "12px", fontSize: "12px", color: "var(--gray-11)" }}>Medium</div>
    </div>
    <div style={{ textAlign: "center" }}>
      <OrbitalSpinner size="lg" />
      <div style={{ marginTop: "12px", fontSize: "12px", color: "var(--gray-11)" }}>Large</div>
    </div>
  </div>
);

export const Colors: Story = () => (
  <div
    style={{
      padding: "40px",
      background: "var(--gray-1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "40px",
      flexWrap: "wrap",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <OrbitalSpinner color={colors.primary} />
      <div style={{ marginTop: "12px", fontSize: "12px", color: "var(--gray-11)" }}>Primary</div>
      <div style={{ fontSize: "10px", color: "var(--gray-10)", fontFamily: "monospace" }}>{colors.primary}</div>
    </div>
    <div style={{ textAlign: "center" }}>
      <OrbitalSpinner color={colors.secondary} />
      <div style={{ marginTop: "12px", fontSize: "12px", color: "var(--gray-11)" }}>Secondary</div>
      <div style={{ fontSize: "10px", color: "var(--gray-10)", fontFamily: "monospace" }}>{colors.secondary}</div>
    </div>
    <div style={{ textAlign: "center" }}>
      <OrbitalSpinner color={colors.accent} />
      <div style={{ marginTop: "12px", fontSize: "12px", color: "var(--gray-11)" }}>Accent</div>
      <div style={{ fontSize: "10px", color: "var(--gray-10)", fontFamily: "monospace" }}>{colors.accent}</div>
    </div>
    <div style={{ textAlign: "center" }}>
      <OrbitalSpinner color={colors.warning} />
      <div style={{ marginTop: "12px", fontSize: "12px", color: "var(--gray-11)" }}>Warning</div>
      <div style={{ fontSize: "10px", color: "var(--gray-10)", fontFamily: "monospace" }}>{colors.warning}</div>
    </div>
    <div style={{ textAlign: "center" }}>
      <OrbitalSpinner color={colors.danger} />
      <div style={{ marginTop: "12px", fontSize: "12px", color: "var(--gray-11)" }}>Danger</div>
      <div style={{ fontSize: "10px", color: "var(--gray-10)", fontFamily: "monospace" }}>{colors.danger}</div>
    </div>
    <div style={{ textAlign: "center" }}>
      <OrbitalSpinner color={colors.success} />
      <div style={{ marginTop: "12px", fontSize: "12px", color: "var(--gray-11)" }}>Success</div>
      <div style={{ fontSize: "10px", color: "var(--gray-10)", fontFamily: "monospace" }}>{colors.success}</div>
    </div>
  </div>
);

export const Speeds: Story = () => (
  <div
    style={{
      padding: "40px",
      background: "var(--gray-1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "40px",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <OrbitalSpinner speed={2} />
      <div style={{ marginTop: "12px", fontSize: "12px", color: "var(--gray-11)" }}>Slow (Speed 2)</div>
    </div>
    <div style={{ textAlign: "center" }}>
      <OrbitalSpinner speed={5} />
      <div style={{ marginTop: "12px", fontSize: "12px", color: "var(--gray-11)" }}>Normal (Speed 5)</div>
    </div>
    <div style={{ textAlign: "center" }}>
      <OrbitalSpinner speed={8} />
      <div style={{ marginTop: "12px", fontSize: "12px", color: "var(--gray-11)" }}>Fast (Speed 8)</div>
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
      <OrbitalSpinner size="sm" />
      <div style={{ color: "var(--gray-12)" }}>Loading your data...</div>
    </div>

    <div
      style={{
        padding: "40px",
        background: "var(--gray-3)",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <OrbitalSpinner size="lg" color={colors.secondary} />
      <div style={{ color: "var(--gray-12)", fontSize: "18px" }}>
        Processing your request...
      </div>
    </div>

    <div
      style={{
        padding: "12px 24px",
        background: colors.primary,
        borderRadius: "6px",
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        alignSelf: "flex-start",
      }}
    >
      <OrbitalSpinner size="sm" color="#FFFFFF" speed={8} />
      <div style={{ color: "#FFFFFF" }}>Saving...</div>
    </div>
  </div>
);
