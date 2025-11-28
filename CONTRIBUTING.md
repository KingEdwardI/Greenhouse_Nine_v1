# Contributing to Greenhouse Nine

Thank you for your interest in contributing to Greenhouse Nine! This guide will help you get started with development.

## Table of Contents

- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Adding New Components](#adding-new-components)
- [CSS and Styling](#css-and-styling)
- [Design Tokens](#design-tokens)
- [Building](#building)
- [Code Style](#code-style)
- [Pull Request Process](#pull-request-process)

## Development Setup

### Prerequisites

- Node.js 18+ (recommend using latest LTS)
- pnpm 8+ (this project uses pnpm)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Greenhouse_Nine
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm run ladle
```

This will start Ladle at `http://localhost:61000` where you can view all components and their stories.

## Project Structure

```
Greenhouse_Nine/
├── src/
│   ├── components/          # All UI components
│   │   ├── Button/
│   │   │   ├── Button.tsx          # Component implementation
│   │   │   ├── Button.css          # Component styles
│   │   │   ├── Button.stories.tsx  # Ladle stories
│   │   │   └── index.ts            # Barrel exports
│   │   └── ...
│   ├── theme/               # Theme provider and CSS overrides
│   │   ├── ThemeProvider.tsx
│   │   └── radix-overrides.css (auto-generated)
│   ├── tokens/              # Design tokens
│   │   └── colors.ts
│   ├── utils/               # Utility functions
│   ├── styles/              # Global styles
│   └── index.ts             # Main library entry
├── scripts/
│   └── generateRadixCSS.ts  # CSS generation script
├── dist/                    # Build output (gitignored)
└── package.json
```

## Development Workflow

### Running Ladle (Component Development)

```bash
pnpm run ladle
```

Ladle provides an interactive development environment for components:

- Live component preview
- Hot module replacement
- Story-based development
- Access at `http://localhost:61000`

### Linting & Code Style

#### Linting

```bash
pnpm run lint
```

Auto-fixes ESLint issues when possible. Includes TypeScript strict checking, React hooks rules, and code style enforcement.

#### Code Formatting

```bash
pnpm run format      # Format all files
pnpm run format:check # Check if files are properly formatted
```

Uses Prettier for consistent code formatting. Pre-commit hooks automatically run both linting and formatting checks.

**Note:** Formatting issues will prevent commits. If your commit fails due to formatting, run `pnpm run format` to fix them automatically.

### Building

```bash
pnpm run build
```

This will:

1. Run `generate:css` to create `radix-overrides.css` from design tokens
2. Compile TypeScript
3. Bundle the library with Vite
4. Generate TypeScript declarations
5. Output to `dist/`

## Adding New Components

### 1. Create Component Directory

```bash
mkdir src/components/MyComponent
```

### 2. Create Component Files

**`src/components/MyComponent/MyComponent.tsx`**

```tsx
import React from "react";
import "./MyComponent.css";

export interface MyComponentProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ children, variant = "primary", size = "md", ...props }, ref) => {
    const className = ["gn-MyComponent", `gn-MyComponent--${variant}`].join(
      " "
    );

    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    );
  }
);

MyComponent.displayName = "MyComponent";
```

**`src/components/MyComponent/MyComponent.css`**

```css
.gn-MyComponent {
  /* Component styles */
}

.gn-MyComponent--primary {
  /* Variant styles */
}
```

**`src/components/MyComponent/MyComponent.stories.tsx`**

```tsx
import type { Story } from "@ladle/react";
import { MyComponent, MyComponentProps } from "./MyComponent";

export const Default: Story<MyComponentProps> = props => (
  <MyComponent {...props}>Content</MyComponent>
);

Default.args = {
  variant: "primary",
  size: "md",
};

export const Variants: Story = () => (
  <div>
    <MyComponent variant="primary">Primary</MyComponent>
    <MyComponent variant="secondary">Secondary</MyComponent>
  </div>
);
```

**`src/components/MyComponent/index.ts`**

```tsx
export { MyComponent } from "./MyComponent";
export type { MyComponentProps } from "./MyComponent";
```

### 3. Export from Components Index

Add to `src/components/index.ts`:

```tsx
export { MyComponent } from "./MyComponent";
export type { MyComponentProps } from "./MyComponent";
```

### 4. Test in Ladle

Start Ladle and verify your component works:

```bash
pnpm run ladle
```

## CSS and Styling

### Naming Convention

- Use BEM-style naming: `gn-ComponentName`, `gn-ComponentName--variant`, `gn-ComponentName__element`
- Prefix all custom classes with `gn-` to avoid conflicts
- Keep styles scoped to component files

### Design System Integration

Greenhouse Nine is built on Radix UI Themes. When creating components:

1. **Extend Radix components** when possible:

```tsx
import { Button as RadixButton } from "@radix-ui/themes";
import type { ButtonProps as RadixButtonProps } from "@radix-ui/themes";

export interface ButtonProps extends Omit<RadixButtonProps, "size"> {
  size?: "sm" | "md" | "lg";
}
```

2. **Map design system values** to Radix values:

```tsx
const sizeMap = {
  sm: "1",
  md: "2",
  lg: "3",
};
```

3. **Use custom CSS** for additional styling via `.css` files

### Auto-Generated CSS

The project uses a CSS generation system:

- Design tokens are defined in `src/tokens/colors.ts`
- Run `pnpm run generate:css` to generate `src/theme/radix-overrides.css`
- This happens automatically before builds and Ladle starts

**Do not edit `radix-overrides.css` manually** - it will be overwritten!

## Design Tokens

### Adding Colors

Edit `src/tokens/colors.ts`:

```tsx
export const colors = {
  // Add new color
  myNewColor: "#123456",

  // Existing colors...
  emerald: "#93B97A",
  // ...
} as const;
```

Then regenerate CSS:

```bash
pnpm run generate:css
```

### Using Tokens in Components

```tsx
import { colors } from "../tokens/colors";

// In your component or styles
const myColor = colors.myNewColor;
```

## Building

### Library Build

```bash
pnpm run build
```

**Output:**

- `dist/index.mjs` - ES module
- `dist/index.cjs` - CommonJS module
- `dist/index.d.ts` - TypeScript declarations
- `dist/style.css` - Bundled styles

### Build Configuration

The library is configured in `vite.config.ts`:

- External dependencies: `react`, `react-dom`, `@radix-ui/themes`
- Multiple output formats (ESM, CJS)
- TypeScript declarations via `vite-plugin-dts`
- CSS bundled into single `style.css`

### Pre-build Steps

Automatically runs before build:

1. `prebuild` → `generate:css`

## Code Style

### TypeScript

- Use TypeScript for all components
- Export prop types for all components
- Use `React.forwardRef` when ref forwarding is needed
- Prefer `interface` over `type` for prop definitions

### Component Structure

```tsx
import React from "react";
import "./Component.css";

export interface ComponentProps {
  // Props definition
}

export const Component = React.forwardRef<HTMLElement, ComponentProps>(
  (props, ref) => {
    // Implementation
  }
);

Component.displayName = "Component";
```

### Imports

Order imports:

1. React
2. Third-party libraries
3. Radix UI
4. Local components
5. Styles

```tsx
import React from "react";
import { SomeLib } from "some-lib";
import { RadixComponent } from "@radix-ui/themes";
import { LocalComponent } from "../LocalComponent";
import "./Component.css";
```

## Pull Request Process

1. **Create a feature branch:**

   ```bash
   git checkout -b feature/my-new-component
   ```

2. **Make your changes:**
   - Add/update components
   - Add/update stories
   - Update documentation if needed

3. **Test your changes:**

   ```bash
   pnpm run lint
   pnpm run build
   pnpm run ladle  # Verify visually
   ```

4. **Commit your changes:**

   ```bash
   git add .
   git commit -m "feat: add MyComponent"
   ```

   Use conventional commits:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding/updating tests
   - `chore:` - Maintenance tasks

5. **Push and create PR:**

   ```bash
   git push origin feature/my-new-component
   ```

6. **PR Requirements:**
   - Description of changes
   - Screenshots/GIFs for UI changes
   - Update COMPONENTS.md if adding new components
   - Ensure build passes
   - Request review

## Testing

Currently, the project uses Ladle for visual component testing. To test:

1. Start Ladle: `pnpm run ladle`
2. Navigate to your component story
3. Verify all variants and props work correctly
4. Test interactions and edge cases

### Pre-commit Checks

Before each commit, the following automated checks run:

1. **ESLint**: TypeScript linting with strict rules and code style enforcement
2. **Prettier**: Code formatting verification

These checks ensure code quality and consistent formatting. If checks fail, commits are blocked until issues are resolved. Run `pnpm run lint` and `pnpm run format` to fix issues automatically.

## Questions?

- Open an issue for bugs or feature requests
- Start a discussion for questions or ideas
- Review existing components for patterns and examples

---

Thank you for contributing to Greenhouse Nine!
