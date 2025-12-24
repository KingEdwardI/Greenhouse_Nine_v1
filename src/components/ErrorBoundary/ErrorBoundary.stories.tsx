import { useState } from "react";
import type { Story } from "@ladle/react";
import { ErrorBoundary, SectionErrorBoundary } from "./ErrorBoundary";
import { Box, Button, Card, Flex, Text } from "@radix-ui/themes";

export default {
  title: "Utilities - ErrorBoundary",
};

// Component that throws an error when rendered
function ThrowError({ message = "Test error" }: { message?: string }): null {
  throw new Error(message);
}

// Component that can be toggled to throw an error
function ToggleError() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error("User triggered error");
  }

  return (
    <Box p="4">
      <Card>
        <Flex direction="column" gap="3" align="center" p="4">
          <Text>This component is working normally.</Text>
          <Button onClick={() => setShouldError(true)} color="red">
            Trigger Error
          </Button>
        </Flex>
      </Card>
    </Box>
  );
}

export const Default: Story = () => (
  <div
    style={{ padding: "20px", background: "var(--gray-1)", minHeight: "400px" }}
  >
    <ErrorBoundary>
      <Box p="4">
        <Text>
          This content is wrapped in an ErrorBoundary and working normally.
        </Text>
      </Box>
    </ErrorBoundary>
  </div>
);

export const ErrorState: Story = () => (
  <div
    style={{ padding: "20px", background: "var(--gray-1)", minHeight: "400px" }}
  >
    <ErrorBoundary>
      <ThrowError message="Something went wrong in the application!" />
    </ErrorBoundary>
  </div>
);

export const CustomFallback: Story = () => (
  <div
    style={{ padding: "20px", background: "var(--gray-1)", minHeight: "400px" }}
  >
    <ErrorBoundary
      fallback={
        <Card style={{ maxWidth: "400px", margin: "0 auto" }}>
          <Flex direction="column" gap="2" p="4" align="center">
            <Text size="4" weight="bold" color="red">
              Custom Error UI
            </Text>
            <Text size="2" color="gray">
              This is a custom fallback component instead of the default error
              boundary UI.
            </Text>
            <Button size="2" onClick={() => window.location.reload()}>
              Reload Application
            </Button>
          </Flex>
        </Card>
      }
    >
      <ThrowError message="Error with custom fallback" />
    </ErrorBoundary>
  </div>
);

export const WithReset: Story = () => {
  const [resetCount, setResetCount] = useState(0);

  return (
    <div
      style={{
        padding: "20px",
        background: "var(--gray-1)",
        minHeight: "400px",
      }}
    >
      <Box mb="3">
        <Text size="2" color="gray">
          Reset count: {resetCount}
        </Text>
      </Box>
      <ErrorBoundary onReset={() => setResetCount(c => c + 1)}>
        <ToggleError />
      </ErrorBoundary>
    </div>
  );
};

export const SectionBoundary: Story = () => (
  <div
    style={{
      padding: "20px",
      background: "var(--gray-1)",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    }}
  >
    <SectionErrorBoundary sectionName="Header">
      <Card>
        <Box p="3">
          <Text weight="bold">Header Section</Text>
          <Text size="2" color="gray">
            This section is working correctly.
          </Text>
        </Box>
      </Card>
    </SectionErrorBoundary>

    <SectionErrorBoundary sectionName="Content Area">
      <Card>
        <Box p="3">
          <ThrowError message="Content section failed to render" />
        </Box>
      </Card>
    </SectionErrorBoundary>

    <SectionErrorBoundary sectionName="Sidebar">
      <Card>
        <Box p="3">
          <Text weight="bold">Sidebar Section</Text>
          <Text size="2" color="gray">
            This section is also working correctly.
          </Text>
        </Box>
      </Card>
    </SectionErrorBoundary>
  </div>
);

export const NestedBoundaries: Story = () => (
  <div
    style={{ padding: "20px", background: "var(--gray-1)", minHeight: "400px" }}
  >
    <ErrorBoundary>
      <Card style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Box p="4">
          <Text size="4" weight="bold" mb="3">
            Parent Component
          </Text>
          <Flex direction="column" gap="3">
            <SectionErrorBoundary sectionName="Section 1">
              <Box
                p="3"
                style={{ background: "var(--green-3)", borderRadius: "6px" }}
              >
                <Text>Section 1 - Working</Text>
              </Box>
            </SectionErrorBoundary>

            <SectionErrorBoundary sectionName="Section 2">
              <Box
                p="3"
                style={{ background: "var(--red-3)", borderRadius: "6px" }}
              >
                <ThrowError message="Section 2 error" />
              </Box>
            </SectionErrorBoundary>

            <SectionErrorBoundary sectionName="Section 3">
              <Box
                p="3"
                style={{ background: "var(--blue-3)", borderRadius: "6px" }}
              >
                <Text>Section 3 - Working</Text>
              </Box>
            </SectionErrorBoundary>
          </Flex>
        </Box>
      </Card>
    </ErrorBoundary>
  </div>
);

export const WithoutSectionName: Story = () => (
  <div
    style={{
      padding: "20px",
      background: "var(--gray-1)",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    }}
  >
    <SectionErrorBoundary>
      <Card>
        <Box p="3">
          <ThrowError message="Section error without custom name" />
        </Box>
      </Card>
    </SectionErrorBoundary>
  </div>
);

export const LongErrorMessage: Story = () => (
  <div
    style={{ padding: "20px", background: "var(--gray-1)", minHeight: "400px" }}
  >
    <ErrorBoundary>
      <ThrowError message="This is a very long error message that demonstrates how the error boundary handles lengthy error text. It includes technical details like stack traces, file paths, and other debugging information that might be quite verbose. The error boundary should display this in a scrollable container so the UI remains usable even with extensive error details. TypeError: Cannot read property 'map' of undefined at Component.render (component.tsx:45:12) at processChild (react-reconciler.js:234:5)" />
    </ErrorBoundary>
  </div>
);
