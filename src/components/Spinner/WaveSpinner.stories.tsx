import type { Story } from "@ladle/react";
import { WaveSpinner } from "./WaveSpinner";
import type { WaveSpinnerProps } from "./WaveSpinner";

export default {
  title: "Feedback - Wave Spinner",
};

export const Default: Story<WaveSpinnerProps> = args => (
  <div
    style={{
      padding: "40px",
      background: "var(--gray-1)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <WaveSpinner {...args} />
  </div>
);

Default.args = {
  size: "md",
  speed: 5,
  bars: 5,
};

Default.argTypes = {
  size: {
    control: { type: "select" },
    options: ["sm", "md", "lg"],
    defaultValue: "md",
  },
  speed: {
    control: { type: "range", min: 1, max: 10, step: 1 },
    defaultValue: 5,
  },
  bars: {
    control: { type: "range", min: 3, max: 12, step: 1 },
    defaultValue: 5,
  },
  color: {
    control: { type: "color" },
  },
};

export const Sizes: Story = () => (
  <div
    style={{
      padding: "40px",
      background: "var(--gray-1)",
      display: "flex",
      flexDirection: "column",
      gap: "40px",
      alignItems: "center",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "12px", color: "var(--gray-12)" }}>Small</div>
      <WaveSpinner size="sm" />
    </div>
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "12px", color: "var(--gray-12)" }}>
        Medium
      </div>
      <WaveSpinner size="md" />
    </div>
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "12px", color: "var(--gray-12)" }}>Large</div>
      <WaveSpinner size="lg" />
    </div>
  </div>
);

export const Colors: Story = () => (
  <div
    style={{
      padding: "40px",
      background: "var(--gray-1)",
      display: "flex",
      flexDirection: "column",
      gap: "32px",
      alignItems: "center",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          marginBottom: "12px",
          color: "var(--gray-12)",
          fontWeight: 600,
        }}
      >
        Primary (Emerald)
      </div>
      <WaveSpinner color="#2E8B57" />
    </div>
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          marginBottom: "12px",
          color: "var(--gray-12)",
          fontWeight: 600,
        }}
      >
        Secondary (Cerulean)
      </div>
      <WaveSpinner color="#007BA7" />
    </div>
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          marginBottom: "12px",
          color: "var(--gray-12)",
          fontWeight: 600,
        }}
      >
        Accent (Purple)
      </div>
      <WaveSpinner color="#541466" />
    </div>
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          marginBottom: "12px",
          color: "var(--gray-12)",
          fontWeight: 600,
        }}
      >
        Warning (Gold)
      </div>
      <WaveSpinner color="#DAA520" />
    </div>
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          marginBottom: "12px",
          color: "var(--gray-12)",
          fontWeight: 600,
        }}
      >
        Danger (Orange)
      </div>
      <WaveSpinner color="#e54709" />
    </div>
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          marginBottom: "12px",
          color: "var(--gray-12)",
          fontWeight: 600,
        }}
      >
        Success (Mint)
      </div>
      <WaveSpinner color="#93e9be" />
    </div>
  </div>
);

export const Bars: Story = () => (
  <div
    style={{
      padding: "40px",
      background: "var(--gray-1)",
      display: "flex",
      flexDirection: "column",
      gap: "32px",
      alignItems: "center",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "12px", color: "var(--gray-12)" }}>
        3 Bars
      </div>
      <WaveSpinner bars={3} color="#2E8B57" />
    </div>
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "12px", color: "var(--gray-12)" }}>
        5 Bars (Default)
      </div>
      <WaveSpinner bars={5} color="#2E8B57" />
    </div>
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "12px", color: "var(--gray-12)" }}>
        7 Bars
      </div>
      <WaveSpinner bars={7} color="#2E8B57" />
    </div>
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "12px", color: "var(--gray-12)" }}>
        10 Bars
      </div>
      <WaveSpinner bars={10} color="#2E8B57" />
    </div>
  </div>
);

export const Speeds: Story = () => (
  <div
    style={{
      padding: "40px",
      background: "var(--gray-1)",
      display: "flex",
      flexDirection: "column",
      gap: "32px",
      alignItems: "center",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "12px", color: "var(--gray-12)" }}>
        Slow (Speed 2)
      </div>
      <WaveSpinner speed={2} color="#007BA7" />
    </div>
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "12px", color: "var(--gray-12)" }}>
        Normal (Speed 5)
      </div>
      <WaveSpinner speed={5} color="#007BA7" />
    </div>
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "12px", color: "var(--gray-12)" }}>
        Fast (Speed 8)
      </div>
      <WaveSpinner speed={8} color="#007BA7" />
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
      gap: "32px",
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
      <WaveSpinner size="sm" color="#2E8B57" />
      <span style={{ color: "var(--gray-12)" }}>Loading your data...</span>
    </div>

    <div
      style={{
        padding: "48px",
        background: "var(--gray-3)",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <WaveSpinner size="md" color="#541466" bars={7} />
      <span style={{ color: "var(--gray-12)", fontSize: "18px" }}>
        Processing...
      </span>
    </div>

    <div
      style={{
        padding: "60px",
        background: "var(--gray-3)",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
      }}
    >
      <WaveSpinner size="lg" color="#007BA7" bars={9} speed={2} />
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            color: "var(--gray-12)",
            fontSize: "20px",
            fontWeight: 600,
            marginBottom: "8px",
          }}
        >
          Analyzing Audio
        </div>
        <div style={{ color: "var(--gray-11)", fontSize: "14px" }}>
          This may take a moment...
        </div>
      </div>
    </div>
  </div>
);
