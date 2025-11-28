# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Greenhouse Nine is a React component library built on Radix UI Themes. It provides custom components with a design system tailored for the Highwind project ecosystem.

## Commands

```bash
pnpm run ladle          # Start Ladle dev server (http://localhost:61000) for component development
pnpm run build          # Build the library (runs generate:css first)
pnpm run lint           # Lint with auto-fix
pnpm run generate:css   # Generate radix-overrides.css from color tokens
```

## Architecture

### Export Structure (`src/index.ts`)

The library has a deliberate export order to handle naming conflicts:
1. Custom components export first (take precedence)
2. ThemeProvider
3. Design tokens
4. Selective Radix re-exports (only non-overridden components)

### Component Pattern

Components wrap Radix UI primitives with custom styling. Standard structure:
```
src/components/ComponentName/
├── ComponentName.tsx      # Main component
├── ComponentName.css      # Styles (optional)
├── ComponentName.stories.tsx  # Ladle stories
└── index.ts               # Exports component and types
```

Components follow this pattern:
- Extend Radix props with custom additions
- Map custom props (e.g., `color="accent"` → `"green"`)
- Use `gn-` prefix for CSS classes (e.g., `gn-Button`, `gn-Button--glass`)
- Export both component and `ComponentProps` type

### Color System (`src/tokens/colors.ts` → CSS)

Colors are defined in `src/tokens/colors.ts` and transformed into CSS custom properties:
1. Edit `colors.ts` with new/changed colors
2. Run `pnpm run generate:css` (or it runs automatically before build/ladle)
3. This generates `src/theme/radix-overrides.css` with Radix color scale overrides

The `generateRadixOverrides()` function in `src/utils/colorUtils.ts` maps semantic colors to Radix's 12-step color scales.

### ThemeProvider

Wraps Radix `Theme` with fixed settings: dark appearance, green accent, gray neutral, medium radius.

### Glass Effect

Components supporting glassmorphism use `--glass-*` CSS variables defined in the color system. Enable with `glass` prop.

## Key Conventions

- Components use Radix's native sizing system (`"1"` | `"2"` | `"3"` | `"4"`)
- `color="accent"` maps to the theme's green accent color
- All custom components are re-exported from `src/components/index.ts`
- Stories use Ladle (not Storybook) - files are `*.stories.tsx`
