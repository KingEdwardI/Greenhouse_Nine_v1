import { Dropdown } from "./Dropdown";

export default {
  title: "Forms - Dropdown",
};

const sections = [
  {
    label: "Fruits",
    items: [{ label: "Apple" }, { label: "Banana" }, { label: "Cherry" }],
  },
  {
    label: "Vegetables",
    items: [{ label: "Carrot" }, { label: "Lettuce" }],
  },
];

export const Default = () => <Dropdown label="Pick item" sections={sections} />;

export const Sizes = () => (
  <div
    style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}
  >
    <Dropdown size="1" label="Size 1" sections={sections} />
    <Dropdown size="2" label="Size 2 (default)" sections={sections} />
    <Dropdown size="3" label="Size 3" sections={sections} />
  </div>
);

export const Alignment = () => (
  <div
    style={{
      display: "flex",
      gap: 16,
      alignItems: "center",
      flexWrap: "wrap",
      padding: 40,
    }}
  >
    <Dropdown label="Start Align" sections={sections} align="start" />
    <Dropdown label="Center Align" sections={sections} align="center" />
    <Dropdown label="End Align" sections={sections} align="end" />
  </div>
);

export const Position = () => (
  <div
    style={{
      display: "flex",
      gap: 16,
      alignItems: "center",
      flexWrap: "wrap",
      padding: 60,
    }}
  >
    <Dropdown label="Bottom" sections={sections} side="bottom" />
    <Dropdown label="Top" sections={sections} side="top" />
    <Dropdown label="Left" sections={sections} side="left" />
    <Dropdown label="Right" sections={sections} side="right" />
  </div>
);

export const Glass = () => (
  <div
    style={{
      display: "flex",
      gap: 24,
      alignItems: "center",
      flexWrap: "wrap",
      padding: 60,
      background:
        "radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 45%), var(--color-panel)",
      borderRadius: 16,
    }}
  >
    <Dropdown label="Glass dropdown" sections={sections} glass />
    <Dropdown label="Aligned glass" sections={sections} glass align="center" />
    <Dropdown label="Side glass" sections={sections} glass side="top" />
  </div>
);
