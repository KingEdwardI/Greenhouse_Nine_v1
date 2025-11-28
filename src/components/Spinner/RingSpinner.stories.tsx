import type { Story } from "@ladle/react";
import { RingSpinner } from "./RingSpinner";
import type { RingSpinnerProps } from "./RingSpinner";

export default {
  title: "Feedback - Ring Spinner",
};

export const Default: Story<RingSpinnerProps> = args => (
  <div
    style={{
      padding: "40px",
      background: "var(--gray-1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <RingSpinner {...args} />
  </div>
);

Default.args = {
  size: "md",
  speed: 5,
  thickness: 4,
};

Default.argTypes = {
  size: {
    control: { type: "select" },
    options: ["sm", "md", "lg"],
  },
  speed: {
    control: { type: "range", min: 1, max: 10, step: 1 },
    defaultValue: 5,
  },
  thickness: {
    control: { type: "number", min: 1, max: 10, step: 1 },
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <RingSpinner size="sm" />
      <div style={{ color: "var(--gray-11)", fontSize: "14px" }}>Small</div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <RingSpinner size="md" />
      <div style={{ color: "var(--gray-11)", fontSize: "14px" }}>Medium</div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <RingSpinner size="lg" />
      <div style={{ color: "var(--gray-11)", fontSize: "14px" }}>Large</div>
    </div>
  </div>
);

export const Colors: Story = () => (
  <div
    style={{
      padding: "40px",
      background: "var(--gray-1)",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      gap: "40px",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <RingSpinner color="#2E8B57" />
      <div style={{ color: "var(--gray-11)", fontSize: "14px" }}>Primary</div>
      <div style={{ color: "var(--gray-9)", fontSize: "12px" }}>#2E8B57</div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <RingSpinner color="#007BA7" />
      <div style={{ color: "var(--gray-11)", fontSize: "14px" }}>Secondary</div>
      <div style={{ color: "var(--gray-9)", fontSize: "12px" }}>#007BA7</div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <RingSpinner color="#541466" />
      <div style={{ color: "var(--gray-11)", fontSize: "14px" }}>Accent</div>
      <div style={{ color: "var(--gray-9)", fontSize: "12px" }}>#541466</div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <RingSpinner color="#DAA520" />
      <div style={{ color: "var(--gray-11)", fontSize: "14px" }}>Warning</div>
      <div style={{ color: "var(--gray-9)", fontSize: "12px" }}>#DAA520</div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <RingSpinner color="#e54709" />
      <div style={{ color: "var(--gray-11)", fontSize: "14px" }}>Danger</div>
      <div style={{ color: "var(--gray-9)", fontSize: "12px" }}>#e54709</div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <RingSpinner color="#233ba3" />
      <div style={{ color: "var(--gray-11)", fontSize: "14px" }}>Info</div>
      <div style={{ color: "var(--gray-9)", fontSize: "12px" }}>#233ba3</div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <RingSpinner color="#93e9be" />
      <div style={{ color: "var(--gray-11)", fontSize: "14px" }}>Success</div>
      <div style={{ color: "var(--gray-9)", fontSize: "12px" }}>#93e9be</div>
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <RingSpinner speed={2} />
      <div style={{ color: "var(--gray-11)", fontSize: "14px" }}>
        Slow (Speed 2)
      </div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <RingSpinner speed={5} />
      <div style={{ color: "var(--gray-11)", fontSize: "14px" }}>
        Normal (Speed 5)
      </div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <RingSpinner speed={8} />
      <div style={{ color: "var(--gray-11)", fontSize: "14px" }}>
        Fast (Speed 8)
      </div>
    </div>
  </div>
);

export const Thickness: Story = () => (
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <RingSpinner thickness={2} />
      <div style={{ color: "var(--gray-11)", fontSize: "14px" }}>2px</div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <RingSpinner thickness={4} />
      <div style={{ color: "var(--gray-11)", fontSize: "14px" }}>4px</div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <RingSpinner thickness={6} />
      <div style={{ color: "var(--gray-11)", fontSize: "14px" }}>6px</div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <RingSpinner thickness={8} />
      <div style={{ color: "var(--gray-11)", fontSize: "14px" }}>8px</div>
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
      <RingSpinner size="sm" />
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
      <RingSpinner size="lg" color="#007BA7" />
      <div style={{ color: "var(--gray-12)", fontSize: "18px" }}>
        Processing your request...
      </div>
    </div>

    <div
      style={{
        padding: "12px 24px",
        background: "#2E8B57",
        borderRadius: "6px",
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        alignSelf: "flex-start",
      }}
    >
      <RingSpinner size="sm" color="#FFFFFF" speed={8} />
      <div style={{ color: "#FFFFFF" }}>Saving...</div>
    </div>
  </div>
);
