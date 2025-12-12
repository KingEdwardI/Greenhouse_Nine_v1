# Changelog

All notable changes to Greenhouse Nine will be documented in this file.

## [0.1.0] - 2024-12-09

### Added

#### Core Components

- **Button** - Primary action component with glass variant support
- **Card** - Container component with glass styling
- **Input** - Text input with variants (Password, Number, Masked)
- **TextArea** - Multi-line text input
- **Select** - Dropdown selection component
- **Checkbox** - Boolean toggle with label support
- **RadioGroup** - Single-selection option group
- **Switch** - Toggle switch component
- **Combobox** - Searchable dropdown with autocomplete
- **DatePicker** - Calendar date selection

#### Layout & Navigation

- **ChatLayout** - Full chat interface layout with header, messages, input
- **Breadcrumbs** - Navigation breadcrumb trail
- **Drawer** - Slide-out panel (uses @radix-ui/react-dialog)
- **Dialog** - Modal dialog component
- **Dropdown** - Action menu component
- **ContextMenu** - Right-click context menu
- **Tooltip** - Hover tooltip

#### Typography

- **Text** - Body text component
- **Heading** - Header text component
- **Label** - Form label component

#### Chat Components

- **Message** - Chat message bubble
- **GlassMessage** - Glassmorphic message variant
- **MessageInput** - Chat input with send button
- **MessageList** - Scrollable message container
- **TypingIndicator** - Animated typing dots
- **MarkdownRenderer** - Markdown with syntax highlighting

#### Data Display

- **DataTable** - Sortable data table
- **ColorPalette** - Color swatch display
- **ProportionBar** - Segmented bar showing proportions with tooltips

#### Feedback

- **Toast** - Toast notifications (ToastProvider, useToast)
- **Spinners** - 8 animated loading spinners:
  - OrbitalSpinner
  - RingSpinner
  - DotMatrixSpinner
  - DotMatrixCircleSpinner
  - DotMatrixSpiralSpinner
  - DotMatrixDiamondSpinner
  - WaveSpinner
  - VineSpinner

#### Forms

- **Field** - Form field wrapper with validation
- **Form** - Form container component

#### Theme

- **ThemeProvider** - Radix theme wrapper with dark mode
- **Design Tokens** - colors, spacing, typography

### Infrastructure

- Ladle for component development stories
- CSS generation from color tokens
- Husky + Prettier for code formatting
- Full TypeScript support with declaration files
- Playwright + Tesseract.js for OCR-based component testing

## [0.0.0] - Initial Development

- Initial component library setup
- Radix UI Themes integration
