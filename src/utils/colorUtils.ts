/**
 * Utility functions for color manipulation and CSS generation
 */

/**
 * Convert hex color to rgba with alpha transparency
 */
export const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * Generate CSS custom properties object from color tokens
 */
export const generateRadixOverrides = (colors: Record<string, string>) => {
  // Define our semantic color mapping
  const semanticColors = {
    // Core backgrounds
    background: colors.charcoal,
    panel: colors.darkGray,
    panelSolid: colors.mediumGray,

    // Primary accent (emerald green)
    primary: colors.emerald,
    primaryHover: colors.teal,
    primaryText: colors.ivory,

    // Danger (red)
    danger: colors.coral,
    dangerHover: colors.magenta,
    dangerText: colors.ivory,

    // Gray scale progression
    gray1: colors.black,
    gray2: colors.charcoal,
    gray3: colors.darkGray,
    gray4: colors.mediumGray,
    gray5: colors.midnight,
    gray6: colors.slate,
    gray7: colors.taupe,
    gray8: colors.silver,
    gray9: colors.ash,
    gray10: colors.stone,
    gray11: colors.beige,
    gray12: colors.ivory,
  };

  return {
    // Color overrides for dark theme
    '--color-background': semanticColors.background,
    '--color-panel': semanticColors.panel,
    '--color-panel-solid': semanticColors.panelSolid,

    // Primary accent color (emerald green palette)
    '--accent-1': semanticColors.gray1,
    '--accent-2': semanticColors.gray2,
    '--accent-3': hexToRgba(semanticColors.primary, 0.1),
    '--accent-4': hexToRgba(semanticColors.primary, 0.2),
    '--accent-5': hexToRgba(semanticColors.primary, 0.3),
    '--accent-6': hexToRgba(semanticColors.primary, 0.4),
    '--accent-7': hexToRgba(semanticColors.primary, 0.5),
    '--accent-8': hexToRgba(semanticColors.primary, 0.7),
    '--accent-9': semanticColors.primary,
    '--accent-10': semanticColors.primaryHover,
    '--accent-11': semanticColors.primary,
    '--accent-12': semanticColors.primaryText,

    // Override green scale directly (since accentColor="green" uses these)
    '--green-1': semanticColors.gray1,
    '--green-2': semanticColors.gray2,
    '--green-3': hexToRgba(semanticColors.primary, 0.1),
    '--green-4': hexToRgba(semanticColors.primary, 0.2),
    '--green-5': hexToRgba(semanticColors.primary, 0.3),
    '--green-6': hexToRgba(semanticColors.primary, 0.4),
    '--green-7': hexToRgba(semanticColors.primary, 0.5),
    '--green-8': hexToRgba(semanticColors.primary, 0.7),
    '--green-9': semanticColors.primary,
    '--green-10': semanticColors.primaryHover,
    '--green-11': semanticColors.primary,
    '--green-12': semanticColors.primaryText,

    // Red scale overrides (danger)
    '--red-1': semanticColors.gray1,
    '--red-2': semanticColors.gray2,
    '--red-3': hexToRgba(semanticColors.danger, 0.1),
    '--red-4': hexToRgba(semanticColors.danger, 0.2),
    '--red-5': hexToRgba(semanticColors.danger, 0.3),
    '--red-6': hexToRgba(semanticColors.danger, 0.4),
    '--red-7': hexToRgba(semanticColors.danger, 0.5),
    '--red-8': hexToRgba(semanticColors.danger, 0.7),
    '--red-9': semanticColors.danger,
    '--red-10': semanticColors.dangerHover,
    '--red-11': semanticColors.danger,
    '--red-12': semanticColors.dangerText,

    // Gray scale overrides
    '--gray-1': semanticColors.gray1,
    '--gray-2': semanticColors.gray2,
    '--gray-3': semanticColors.gray3,
    '--gray-4': semanticColors.gray4,
    '--gray-5': semanticColors.gray5,
    '--gray-6': semanticColors.gray6,
    '--gray-7': semanticColors.gray7,
    '--gray-8': semanticColors.gray8,
    '--gray-9': semanticColors.gray9,
    '--gray-10': semanticColors.gray10,
    '--gray-11': semanticColors.gray11,
    '--gray-12': semanticColors.gray12,

    // Font family overrides
    '--default-font-family': "'FiraCode Mono', 'Fira Code', Monaco, Consolas, monospace",
    '--code-font-family': "'FiraCode Mono', 'Fira Code', 'JetBrains Mono', Monaco, Consolas, monospace",

    // Border radius
    '--radius-1': '2px',
    '--radius-2': '4px',
    '--radius-3': '6px',
    '--radius-4': '8px',
    '--radius-5': '12px',
    '--radius-6': '16px',
  };
};

/**
 * Convert CSS properties object to CSS string
 */
export const cssPropertiesToString = (properties: Record<string, string>): string => {
  return Object.entries(properties)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n');
};

/**
 * Generate complete CSS string for Radix overrides
 */
export const generateRadixCSS = (colors: Record<string, string>): string => {
  const overrides = generateRadixOverrides(colors);
  const cssProperties = cssPropertiesToString(overrides);
  
  return `/* Radix Themes overrides - Auto-generated from colors.ts */

:root, .radix-themes {
${cssProperties}
}

/* Set dark appearance by default */
.radix-themes {
  color-scheme: dark;
}`;
};



