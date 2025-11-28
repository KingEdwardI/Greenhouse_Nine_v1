import type { Story } from "@ladle/react";
import { MarkdownRenderer } from "./MarkdownRenderer";

export default {
  title: "Foundations - Markdown Renderer",
};

export const Basic: Story = () => (
  <MarkdownRenderer>
    {`# Hello World

This is a simple markdown example with **bold** and *italic* text.`}
  </MarkdownRenderer>
);

export const WithCodeBlocks: Story = () => (
  <MarkdownRenderer>
    {`# Code Example

Here's some inline \`code\` and a code block:

\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet('World');
\`\`\`

And some more text below.`}
  </MarkdownRenderer>
);

export const WithLists: Story = () => (
  <MarkdownRenderer>
    {`# Lists

## Unordered List
- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
- Item 3

## Ordered List
1. First item
2. Second item
3. Third item`}
  </MarkdownRenderer>
);

export const WithTable: Story = () => (
  <MarkdownRenderer>
    {`# Table Example

| Feature | Supported | Notes |
|---------|-----------|-------|
| Headers | Yes | H1-H6 |
| Code | Yes | Inline and blocks |
| Tables | Yes | GitHub Flavored Markdown |
| Links | Yes | Standard markdown links |`}
  </MarkdownRenderer>
);

export const WithBlockquote: Story = () => (
  <MarkdownRenderer>
    {`# Quotes

> This is a blockquote.
> It can span multiple lines.
>
> And have multiple paragraphs.

Regular text after the quote.`}
  </MarkdownRenderer>
);

export const WithTaskList: Story = () => (
  <MarkdownRenderer>
    {`# Task List

- [x] Completed task
- [ ] Incomplete task
- [ ] Another incomplete task
  - [x] Nested completed task
  - [ ] Nested incomplete task`}
  </MarkdownRenderer>
);

export const Comprehensive: Story = () => (
  <MarkdownRenderer>
    {`# Comprehensive Example

## Introduction

This example demonstrates **all** the features of the markdown renderer.

## Text Formatting

- **Bold text**
- *Italic text*
- ***Bold and italic***
- ~~Strikethrough~~
- Inline \`code\`

## Links and Images

[Visit GitHub](https://github.com)

## Code Blocks

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
};
\`\`\`

## Lists

### Unordered
- First item
- Second item
- Third item

### Ordered
1. Step one
2. Step two
3. Step three

### Task List
- [x] Design the component
- [x] Implement the component
- [ ] Write tests
- [ ] Deploy to production

## Blockquotes

> "The best way to predict the future is to invent it."
> — Alan Kay

## Tables

| Name | Role | Status |
|------|------|--------|
| Alice | Developer | Active |
| Bob | Designer | Active |
| Carol | Manager | Away |

## Horizontal Rule

---

That's all folks!`}
  </MarkdownRenderer>
);
