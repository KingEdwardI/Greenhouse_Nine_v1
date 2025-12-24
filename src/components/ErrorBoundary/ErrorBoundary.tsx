import { Component, type ReactNode } from "react";
import { Flex, Box, Text, Button, Card } from "@radix-ui/themes";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onReset?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

/**
 * Error boundary component that catches JavaScript errors anywhere in its
 * child component tree, logs those errors, and displays a fallback UI.
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("[ErrorBoundary] Caught error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    this.props.onReset?.();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Flex
          direction="column"
          align="center"
          justify="center"
          style={{ height: "100%", padding: "24px" }}
        >
          <Card style={{ maxWidth: "500px", width: "100%" }}>
            <Flex direction="column" gap="3" align="center" p="4">
              <AlertTriangle size={48} style={{ color: "var(--red-9)" }} />
              <Text size="4" weight="bold" align="center">
                Something went wrong
              </Text>
              <Text size="2" color="gray" align="center">
                The app encountered an unexpected error. You can try refreshing
                the page or going back.
              </Text>
              {this.state.error && (
                <Box
                  p="2"
                  style={{
                    backgroundColor: "var(--gray-3)",
                    borderRadius: "6px",
                    width: "100%",
                    overflow: "auto",
                    maxHeight: "120px",
                  }}
                >
                  <Text
                    size="1"
                    style={{
                      fontFamily: "monospace",
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                    }}
                  >
                    {this.state.error.message}
                  </Text>
                </Box>
              )}
              <Flex gap="2" style={{ marginTop: "8px" }}>
                <Button
                  variant="soft"
                  color="gray"
                  onClick={() => window.location.reload()}
                >
                  <RefreshCw size={14} />
                  Reload Page
                </Button>
                <Button onClick={this.handleReset}>Try Again</Button>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      );
    }

    return this.props.children;
  }
}

/**
 * Smaller error boundary for individual sections/panels
 */
export class SectionErrorBoundary extends Component<
  { children: ReactNode; sectionName?: string },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; sectionName?: string }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error(
      `[SectionErrorBoundary] Error in ${this.props.sectionName || "section"}:`,
      error,
      errorInfo
    );
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <Box
          p="3"
          style={{ backgroundColor: "var(--red-2)", borderRadius: "6px" }}
        >
          <Flex align="center" gap="2">
            <AlertTriangle size={16} style={{ color: "var(--red-9)" }} />
            <Text size="2" color="red">
              {this.props.sectionName
                ? `Failed to load ${this.props.sectionName}`
                : "This section failed to load"}
            </Text>
          </Flex>
        </Box>
      );
    }

    return this.props.children;
  }
}
