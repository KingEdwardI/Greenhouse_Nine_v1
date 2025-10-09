# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Greenhouse Nine** (@highwind/greenhouse-nine), a React component library built with TypeScript and Vite. The library provides a comprehensive set of UI components built on top of Radix UI Themes with custom styling and design tokens.

## Key Commands

### Development
- `pnpm run build` - Build the library for distribution (includes CSS generation)
- `pnpm run lint` - Run ESLint with auto-fix
- `pnpm run ladle` - Start Ladle component development server
- `pnpm run generate:css` - Generate Radix CSS overrides from design tokens

### Build Pipeline
The build process has automatic pre-build steps:
- `prebuild` runs `generate:css` before building
- `preladle` runs `generate:css` before starting Ladle

## Architecture

### Library Structure
This is configured as a **library build** (not an app) with multiple output formats:
- ES modules (`dist/index.mjs`)
- CommonJS (`dist/index.cjs`) 
- TypeScript declarations (`dist/index.d.ts`)
- Bundled CSS (`dist/style.css`)

### Core Directories
- `src/components/` - All UI components with individual directories containing:
  - Component implementation (`.tsx`)
  - Stories for Ladle (`.stories.tsx`)
  - Component-specific styles (`.css`)
  - Barrel export (`index.ts`)
- `src/theme/` - Theme provider and Radix CSS overrides
- `src/tokens/` - Design tokens (colors, typography, spacing)
- `src/utils/` - Utility functions including color utilities
- `scripts/` - Build scripts, particularly CSS generation

### Component Architecture
Components follow a consistent pattern:
1. Each component has its own directory under `src/components/`
2. Main implementation in `[Component].tsx`
3. Ladle stories in `[Component].stories.tsx`
4. Type exports and re-exports in `index.ts`
5. CSS modules for component-specific styling

### Design System Integration
- Built on **Radix UI Themes** as the foundation
- Custom design tokens in `src/tokens/`
- Automatic CSS generation from tokens via `generateRadixCSS.ts` script
- Theme configuration in `ThemeProvider.tsx` (currently set to dark mode, green accent)

### Development Tools
- **Ladle** for component development and documentation
- **Vite** with React plugin for building
- **TypeScript** with project references (`tsconfig.json` -> `tsconfig.app.json` + `tsconfig.node.json`)
- **ESLint** with React hooks and TypeScript rules

### CSS Generation Workflow
The project uses a custom CSS generation system:
1. Design tokens defined in `src/tokens/colors.ts`
2. `scripts/generateRadixCSS.ts` converts tokens to `src/theme/radix-overrides.css`
3. CSS is automatically regenerated before builds and Ladle starts
4. Final CSS is bundled as `dist/style.css`

### External Dependencies
Key runtime dependencies:
- `@radix-ui/themes` and `@radix-ui/react-toast`
- `cmdk` for command palette
- `react-day-picker` for date selection
- `react-imask` for input masking

External peer dependencies (not bundled):
- `react`, `react-dom`, `@radix-ui/themes`