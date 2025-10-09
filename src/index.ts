// ============================================
// Greenhouse Nine Component Library Exports
// ============================================

// 1. Export custom components FIRST (these take precedence over Radix)
// --------------------------------------------
// These components override Radix components with the same names:
// Button, Card, Checkbox, ContextMenu, Dialog, Heading, RadioGroup,
// Select, Switch, Text, TextArea, Tooltip
export * from "./components";

// 2. Export custom theme provider
// --------------------------------------------
export { ThemeProvider } from "./theme/ThemeProvider";

// 3. Export design tokens
// --------------------------------------------
export * from "./tokens";

// 4. Selective re-exports from Radix Themes
// --------------------------------------------
// Only re-export components that we haven't overridden in our custom components
// This avoids naming conflicts while still providing access to all Radix components

export {
  // Layout components (not overridden)
  Container,
  Section,
  Box,
  Flex,
  Grid,

  // Typography components (only those not overridden)
  Em,
  Strong,
  Code,
  Kbd,
  Quote,
  Link,
  Blockquote,

  // Data display (not overridden)
  Table,
  DataList,
  Badge,
  Avatar,

  // Feedback components (not overridden)
  Spinner,
  Skeleton,
  Progress,

  // Navigation (not overridden)
  Tabs,
  TabNav,
  ScrollArea,

  // Overlay components (only those not overridden)
  Popover,
  HoverCard,
  AlertDialog,

  // Dropdown (not overridden - we have Dropdown but it's different)
  DropdownMenu,

  // Form components (only those not overridden)
  Slider,
  SegmentedControl,
  TextField,  // Note: We have Input, not TextField
  Radio,
  CheckboxGroup,
  CheckboxCards,
  RadioCards,

  // Utility components (not overridden)
  Separator,
  AspectRatio,
  Inset,
  Callout,
  VisuallyHidden,
  AccessibleIcon,

  // Theme utilities
  Theme,
  ThemePanel,
  ThemeContext,
  useThemeContext,

  // Icons (included in Radix Themes)
  IconButton,
  ChevronDownIcon,
  ThickCheckIcon,
  ThickChevronRightIcon,
  ThickDividerHorizontalIcon,

  // Portal utilities
  Portal,
  Slot,
  Slottable,

  // CSS Reset
  Reset,

} from "@radix-ui/themes";

// 5. Type exports for TypeScript users
// --------------------------------------------
// Re-export useful types from Radix for the components we expose
// Note: Radix Themes exports limited explicit prop types

export type {
  // Theme-related types
  ThemeProps,

  // Component prop types that Radix explicitly exports
  ContainerProps,
  SectionProps,
  BoxProps,
  FlexProps,
  GridProps,
  BadgeProps,
  AvatarProps,
  SpinnerProps,
  SkeletonProps,
  ProgressProps,
  ScrollAreaProps,
  SliderProps,
  SeparatorProps,
  AspectRatioProps,
  InsetProps,
  IconButtonProps,
  LinkProps,
  CodeProps,
  EmProps,
  StrongProps,
  KbdProps,
  QuoteProps,
  BlockquoteProps,

} from "@radix-ui/themes";