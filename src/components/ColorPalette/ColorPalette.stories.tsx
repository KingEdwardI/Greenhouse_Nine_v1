import { ColorPalette } from "./ColorPalette";
import { colors } from "../../tokens/colors";

export default {
  title: "Core - ColorPalette",
};

export const Default = () => {
  return <ColorPalette />;
};

export const CoreNeutrals = () => {
  return (
    <div style={{ padding: "24px", backgroundColor: "var(--gray-3)" }}>
      <h2 style={{ color: "var(--gray-12)", marginBottom: "24px" }}>
        Core Neutral Shades
      </h2>
      <div style={{ display: "flex", gap: "0", height: "200px" }}>
        <div
          style={{
            flex: 1,
            backgroundColor: "#000000",
            padding: "20px",
            color: "var(--gray-12)",
          }}
        >
          <div>black</div>
          <div style={{ fontSize: "12px", marginTop: "8px" }}>#000000</div>
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: "#151515",
            padding: "20px",
            color: "var(--gray-12)",
          }}
        >
          <div>charcoal</div>
          <div style={{ fontSize: "12px", marginTop: "8px" }}>#151515</div>
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: "#1C1C1C",
            padding: "20px",
            color: "var(--gray-12)",
          }}
        >
          <div>darkGray</div>
          <div style={{ fontSize: "12px", marginTop: "8px" }}>#1C1C1C</div>
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: "#101010",
            padding: "20px",
            color: "var(--gray-12)",
          }}
        >
          <div>mediumGray</div>
          <div style={{ fontSize: "12px", marginTop: "8px" }}>#101010</div>
        </div>
      </div>

      <h2
        style={{
          color: "var(--gray-12)",
          marginTop: "40px",
          marginBottom: "24px",
        }}
      >
        Cool Neutral Shades
      </h2>
      <div style={{ display: "flex", gap: "0", height: "200px" }}>
        <div
          style={{
            flex: 1,
            backgroundColor: "#E5E5E7",
            padding: "20px",
            color: "#000000",
          }}
        >
          <div>lightGray</div>
          <div style={{ fontSize: "12px", marginTop: "8px" }}>#E5E5E7</div>
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: "#A0A0A0",
            padding: "20px",
            color: "#000000",
          }}
        >
          <div>silver</div>
          <div style={{ fontSize: "12px", marginTop: "8px" }}>#A0A0A0</div>
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: "#A2A8A0",
            padding: "20px",
            color: "#000000",
          }}
        >
          <div>ash</div>
          <div style={{ fontSize: "12px", marginTop: "8px" }}>#A2A8A0</div>
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: "#888888",
            padding: "20px",
            color: "var(--gray-12)",
          }}
        >
          <div>slate</div>
          <div style={{ fontSize: "12px", marginTop: "8px" }}>#888888</div>
        </div>
      </div>
    </div>
  );
};

export const ColorMatrix = () => {
  // Organize colors into a comprehensive matrix
  const matrixColors = [
    // Row 1: Core neutrals (blacks & dark grays)
    [
      { name: "black", color: colors.black },
      { name: "charcoal", color: colors.charcoal },
      { name: "darkGray", color: colors.darkGray },
      { name: "mediumGray", color: colors.mediumGray },
      { name: "midnight", color: colors.midnight },
      { name: "graphite", color: colors.graphite },
    ],
    // Row 2: Cool neutrals (grays)
    [
      { name: "lightGray", color: colors.lightGray },
      { name: "silver", color: colors.silver },
      { name: "ash", color: colors.ash },
      { name: "slate", color: colors.slate },
      { name: "stone", color: colors.stone },
      { name: "taupe", color: colors.taupe },
    ],
    // Row 3: Warm neutrals
    [
      { name: "ivory", color: colors.ivory },
      { name: "beige", color: colors.beige },
      { name: "white", color: colors.white },
      { name: "mauve", color: colors.mauve },
      { name: "goldenrod", color: colors.goldenrod },
      { name: "honey", color: colors.honey },
    ],
    // Row 4: Reds & pinks
    [
      { name: "coral", color: colors.coral },
      { name: "salmon", color: colors.salmon },
      { name: "blush", color: colors.blush },
      { name: "rose", color: colors.rose },
      { name: "dustyRose", color: colors.dustyRose },
      { name: "terracotta", color: colors.terracotta },
    ],
    // Row 5: Oranges & yellows
    [
      { name: "peach", color: colors.peach },
      { name: "apricot", color: colors.apricot },
      { name: "butter", color: colors.butter },
      { name: "lavender", color: colors.lavender },
      { name: "plum", color: colors.plum },
      { name: "magenta", color: colors.magenta },
    ],
    // Row 6: Greens
    [
      { name: "mint", color: colors.mint },
      { name: "sage", color: colors.sage },
      { name: "olive", color: colors.olive },
      { name: "emerald", color: colors.emerald },
      { name: "seafoam", color: colors.seafoam },
      { name: "teal", color: colors.teal },
    ],
    // Row 7: Blues & purples
    [
      { name: "sky", color: colors.sky },
      { name: "periwinkle", color: colors.periwinkle },
      { name: "powder", color: colors.powder },
      { name: "cerulean", color: colors.cerulean },
      { name: "orchid", color: colors.orchid },
      { name: "dusk", color: colors.dusk },
    ],
    // Row 8: Purples & deep colors
    [
      { name: "amethyst", color: colors.amethyst },
      { name: "iris", color: colors.iris },
      { name: "lilac", color: colors.lilac },
      { name: "indigo", color: colors.indigo },
      { name: "cocoa", color: colors.cocoa },
      { name: "coffee", color: colors.coffee },
    ],
    // Row 9: Browns
    [
      { name: "chocolate", color: colors.chocolate },
      { name: "espresso", color: colors.espresso },
    ],
  ];

  // Helper function to determine if text should be light or dark
  const getTextColor = (hexColor: string) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
  };

  return (
    <div style={{ padding: "24px", backgroundColor: "var(--gray-3)" }}>
      <h2 style={{ color: "var(--gray-12)", marginBottom: "24px" }}>
        Complete Color Matrix
      </h2>
      <p
        style={{
          color: "var(--gray-7)",
          marginBottom: "32px",
          fontSize: "14px",
        }}
      >
        Click any color to copy its hex value. All{" "}
        {Object.keys(colors).length - 1} colors from our palette.
      </p>

      {matrixColors.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: "flex",
            gap: "2px",
            marginBottom: "2px",
            justifyContent: "flex-start",
          }}
        >
          {row.map(({ name, color }, colIndex) => {
            const textColor = getTextColor(color);
            return (
              <div
                key={colIndex}
                style={{
                  width: "140px",
                  height: "100px",
                  backgroundColor: color,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                onClick={() => navigator.clipboard.writeText(color)}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0, 0, 0, 0.3)";
                  e.currentTarget.style.zIndex = "10";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.zIndex = "1";
                }}
                title={`${name}: ${color}`}
              >
                <span
                  style={{
                    color: textColor,
                    fontSize: "12px",
                    fontWeight: "600",
                    textAlign: "center",
                    textShadow:
                      textColor === "#FFFFFF"
                        ? "0 1px 2px rgba(0,0,0,0.5)"
                        : "0 1px 2px rgba(255,255,255,0.5)",
                    marginBottom: "4px",
                  }}
                >
                  {name}
                </span>
                <span
                  style={{
                    color: textColor,
                    fontSize: "10px",
                    fontFamily: "monospace",
                    textAlign: "center",
                    textShadow:
                      textColor === "#FFFFFF"
                        ? "0 1px 2px rgba(0,0,0,0.5)"
                        : "0 1px 2px rgba(255,255,255,0.5)",
                  }}
                >
                  {color}
                </span>
              </div>
            );
          })}
        </div>
      ))}

      <div
        style={{
          marginTop: "32px",
          padding: "16px",
          backgroundColor: "var(--green-3)",
          borderRadius: "8px",
          border: "1px solid var(--green-5)",
        }}
      >
        <h4 style={{ color: "var(--green-11)", marginBottom: "8px" }}>
          Matrix Organization
        </h4>
        <div
          style={{
            fontSize: "13px",
            color: "var(--gray-12)",
            lineHeight: "1.6",
          }}
        >
          <strong>Rows organized by color family:</strong>
          <br />
          1. Core neutrals (blacks) • 2. Cool neutrals (grays) • 3. Warm
          neutrals
          <br />
          4. Reds & pinks • 5. Oranges & yellows • 6. Greens
          <br />
          7. Blues • 8. Purples & deep colors • 9. Browns
        </div>
      </div>
    </div>
  );
};

export const BrandColors = () => {
  const brandColors = {
    primary: "#2E8B57",
    secondary: "#007BA7",
    accent: "#541466",
    warning: "#DAA520",
    danger: "#e54709",
    info: "#233ba3",
    success: "#93e9be",
  };

  return (
    <div style={{ padding: "24px", backgroundColor: "var(--gray-3)" }}>
      <h2 style={{ color: "var(--gray-12)", marginBottom: "32px" }}>
        Brand & Semantic Colors
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "24px",
        }}
      >
        {Object.entries(brandColors).map(([name, color]) => (
          <div key={name} style={{ textAlign: "center" }}>
            <div
              style={{
                width: "100%",
                height: "100px",
                backgroundColor: color,
                borderRadius: "8px",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onClick={() => navigator.clipboard.writeText(color)}
              onMouseEnter={e =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              <span
                style={{
                  color: name === "warning" ? "#000000" : "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                {color}
              </span>
            </div>
            <div
              style={{
                color: "var(--gray-12)",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
