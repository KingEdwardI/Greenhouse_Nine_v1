import { ProportionBar } from "./ProportionBar";
import type { ProportionBarSegment } from "./ProportionBar";

export default {
  title: "Data Display - ProportionBar",
};

const languageSegments: ProportionBarSegment[] = [
  { id: "typescript", label: "TypeScript", value: 45.2, color: "#3178c6" },
  { id: "javascript", label: "JavaScript", value: 28.1, color: "#f7df1e" },
  { id: "css", label: "CSS", value: 15.3, color: "#264de4" },
  { id: "html", label: "HTML", value: 8.7, color: "#e34c26" },
  { id: "other", label: "Other", value: 2.7, color: "#8b8b8b" },
];

const storageSegments: ProportionBarSegment[] = [
  { id: "photos", label: "Photos", value: 42, color: "#ff6b6b" },
  { id: "videos", label: "Videos", value: 28, color: "#4ecdc4" },
  { id: "documents", label: "Documents", value: 15, color: "#45b7d1" },
  { id: "apps", label: "Apps", value: 10, color: "#96ceb4" },
  { id: "free", label: "Free Space", value: 5, color: "#444444" },
];

const budgetSegments: ProportionBarSegment[] = [
  { id: "housing", label: "Housing", value: 1500, color: "#8884d8" },
  { id: "food", label: "Food", value: 600, color: "#82ca9d" },
  { id: "transport", label: "Transport", value: 400, color: "#ffc658" },
  { id: "utilities", label: "Utilities", value: 200, color: "#ff8042" },
  { id: "savings", label: "Savings", value: 300, color: "#0088fe" },
];

export const Default = () => {
  return (
    <div style={{ padding: "20px", width: "400px" }}>
      <ProportionBar segments={languageSegments} />
    </div>
  );
};

export const Horizontal = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <div>
        <p style={{ marginBottom: "8px", color: "#888" }}>Language breakdown</p>
        <ProportionBar segments={languageSegments} size="12px" />
      </div>
      <div>
        <p style={{ marginBottom: "8px", color: "#888" }}>Storage usage</p>
        <ProportionBar segments={storageSegments} size="12px" />
      </div>
      <div>
        <p style={{ marginBottom: "8px", color: "#888" }}>Monthly budget</p>
        <ProportionBar segments={budgetSegments} size="12px" />
      </div>
    </div>
  );
};

export const Vertical = () => {
  return (
    <div
      style={{ padding: "20px", display: "flex", gap: "40px", height: "300px" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ProportionBar
          segments={languageSegments}
          orientation="vertical"
          size="24px"
          length="250px"
        />
        <p style={{ marginTop: "8px", color: "#888", fontSize: "12px" }}>
          Languages
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ProportionBar
          segments={storageSegments}
          orientation="vertical"
          size="24px"
          length="250px"
        />
        <p style={{ marginTop: "8px", color: "#888", fontSize: "12px" }}>
          Storage
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ProportionBar
          segments={budgetSegments}
          orientation="vertical"
          size="24px"
          length="250px"
        />
        <p style={{ marginTop: "8px", color: "#888", fontSize: "12px" }}>
          Budget
        </p>
      </div>
    </div>
  );
};

export const Sizes = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div>
        <p style={{ marginBottom: "8px", color: "#888" }}>Thin (4px)</p>
        <ProportionBar segments={languageSegments} size="4px" />
      </div>
      <div>
        <p style={{ marginBottom: "8px", color: "#888" }}>Default (8px)</p>
        <ProportionBar segments={languageSegments} />
      </div>
      <div>
        <p style={{ marginBottom: "8px", color: "#888" }}>Medium (12px)</p>
        <ProportionBar segments={languageSegments} size="12px" />
      </div>
      <div>
        <p style={{ marginBottom: "8px", color: "#888" }}>Thick (20px)</p>
        <ProportionBar segments={languageSegments} size="20px" />
      </div>
    </div>
  );
};

export const BorderRadius = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div>
        <p style={{ marginBottom: "8px", color: "#888" }}>None</p>
        <ProportionBar segments={languageSegments} size="12px" radius="none" />
      </div>
      <div>
        <p style={{ marginBottom: "8px", color: "#888" }}>Small</p>
        <ProportionBar segments={languageSegments} size="12px" radius="small" />
      </div>
      <div>
        <p style={{ marginBottom: "8px", color: "#888" }}>Medium (default)</p>
        <ProportionBar
          segments={languageSegments}
          size="12px"
          radius="medium"
        />
      </div>
      <div>
        <p style={{ marginBottom: "8px", color: "#888" }}>Large</p>
        <ProportionBar segments={languageSegments} size="12px" radius="large" />
      </div>
      <div>
        <p style={{ marginBottom: "8px", color: "#888" }}>Full</p>
        <ProportionBar segments={languageSegments} size="12px" radius="full" />
      </div>
    </div>
  );
};

export const Clickable = () => {
  const handleClick = (segment: ProportionBarSegment) => {
    alert(`Clicked: ${segment.label} (${segment.value})`);
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <div>
        <p style={{ marginBottom: "8px", color: "#888" }}>
          Click on any segment to see its details
        </p>
        <ProportionBar
          segments={languageSegments}
          size="16px"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export const CustomColors = () => {
  const gradientSegments: ProportionBarSegment[] = [
    { id: "a", label: "Section A", value: 20, color: "#667eea" },
    { id: "b", label: "Section B", value: 20, color: "#764ba2" },
    { id: "c", label: "Section C", value: 20, color: "#f093fb" },
    { id: "d", label: "Section D", value: 20, color: "#f5576c" },
    { id: "e", label: "Section E", value: 20, color: "#ffd93d" },
  ];

  const earthTones: ProportionBarSegment[] = [
    { id: "a", label: "Terracotta", value: 25, color: "#c9705a" },
    { id: "b", label: "Sage", value: 30, color: "#9caf88" },
    { id: "c", label: "Sand", value: 20, color: "#d4c4a8" },
    { id: "d", label: "Rust", value: 25, color: "#8b4513" },
  ];

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <div>
        <p style={{ marginBottom: "8px", color: "#888" }}>Gradient palette</p>
        <ProportionBar segments={gradientSegments} size="16px" radius="full" />
      </div>
      <div>
        <p style={{ marginBottom: "8px", color: "#888" }}>Earth tones</p>
        <ProportionBar segments={earthTones} size="16px" radius="full" />
      </div>
    </div>
  );
};

export const SingleSegment = () => {
  const progressSegments: ProportionBarSegment[] = [
    { id: "complete", label: "Complete", value: 65, color: "#22c55e" },
    { id: "remaining", label: "Remaining", value: 35, color: "#333333" },
  ];

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <div>
        <p style={{ marginBottom: "8px", color: "#888" }}>
          Progress: 65% complete
        </p>
        <ProportionBar segments={progressSegments} size="8px" radius="full" />
      </div>
    </div>
  );
};
