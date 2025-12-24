import { Box, Flex, Text } from "@radix-ui/themes";
import { useMemo, type ComponentProps } from "react";

interface DiffViewerProps {
  diff: string;
  fileName?: string;
  maxHeight?: number;
}

interface DiffLine {
  type: "added" | "removed" | "context" | "header" | "meta";
  content: string;
  lineNumber?: number;
}

function parseDiff(diff: string): DiffLine[] {
  const lines = diff.split("\n");
  const parsed: DiffLine[] = [];
  let contextLineNum = 0;

  for (const line of lines) {
    if (line.startsWith("+++") || line.startsWith("---")) {
      parsed.push({ type: "meta", content: line });
    } else if (line.startsWith("@@")) {
      parsed.push({ type: "header", content: line });
      // Extract starting line number from @@ -X,Y +A,B @@
      const match = line.match(/@@ -(\d+)/);
      if (match) {
        contextLineNum = parseInt(match[1], 10);
      }
    } else if (line.startsWith("+")) {
      parsed.push({
        type: "added",
        content: line.slice(1),
        lineNumber: contextLineNum,
      });
      contextLineNum++;
    } else if (line.startsWith("-")) {
      parsed.push({
        type: "removed",
        content: line.slice(1),
        lineNumber: contextLineNum,
      });
      // Don't increment for removed lines
    } else if (line.startsWith(" ")) {
      parsed.push({
        type: "context",
        content: line.slice(1),
        lineNumber: contextLineNum,
      });
      contextLineNum++;
    } else if (line.trim()) {
      parsed.push({
        type: "context",
        content: line,
        lineNumber: contextLineNum,
      });
      contextLineNum++;
    }
  }

  return parsed;
}

type BoxStyle = ComponentProps<typeof Box>["style"];

const lineStyles: Record<DiffLine["type"], BoxStyle> = {
  added: {
    backgroundColor: "rgba(46, 160, 67, 0.15)",
    borderLeft: "3px solid var(--green-9)",
  },
  removed: {
    backgroundColor: "rgba(248, 81, 73, 0.15)",
    borderLeft: "3px solid var(--red-9)",
  },
  context: {
    backgroundColor: "transparent",
    borderLeft: "3px solid transparent",
  },
  header: {
    backgroundColor: "var(--blue-3)",
    borderLeft: "3px solid var(--blue-8)",
    fontWeight: 600,
    color: "var(--blue-11)",
  },
  meta: {
    backgroundColor: "var(--gray-3)",
    borderLeft: "3px solid var(--gray-7)",
    fontWeight: 600,
    color: "var(--gray-11)",
  },
};

const symbolColors: Record<DiffLine["type"], string> = {
  added: "var(--green-11)",
  removed: "var(--red-11)",
  context: "var(--gray-8)",
  header: "var(--blue-11)",
  meta: "var(--gray-11)",
};

export function DiffViewer({
  diff,
  fileName,
  maxHeight = 300,
}: DiffViewerProps) {
  const parsedLines = useMemo(() => parseDiff(diff), [diff]);

  const stats = useMemo(() => {
    let added = 0;
    let removed = 0;
    parsedLines.forEach(line => {
      if (line.type === "added") added++;
      if (line.type === "removed") removed++;
    });
    return { added, removed };
  }, [parsedLines]);

  return (
    <Box
      style={{
        border: "1px solid var(--gray-5)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Flex
        align="center"
        justify="between"
        p="2"
        style={{
          backgroundColor: "var(--gray-3)",
          borderBottom: "1px solid var(--gray-5)",
        }}
      >
        <Text size="1" weight="medium">
          {fileName || "Diff"}
        </Text>
        <Flex gap="3">
          <Flex align="center" gap="1">
            <Box
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "var(--green-9)",
              }}
            />
            <Text size="1" color="green">
              +{stats.added}
            </Text>
          </Flex>
          <Flex align="center" gap="1">
            <Box
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "var(--red-9)",
              }}
            />
            <Text size="1" color="red">
              -{stats.removed}
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Diff content */}
      <Box
        style={{
          maxHeight: `${maxHeight}px`,
          overflow: "auto",
          fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          fontSize: "12px",
          lineHeight: "1.5",
        }}
      >
        {parsedLines.map((line, index) => (
          <Flex
            key={index}
            style={{
              ...lineStyles[line.type],
              padding: "1px 8px 1px 4px",
              minHeight: "20px",
            }}
          >
            {/* Line number gutter */}
            <Text
              size="1"
              style={{
                width: "40px",
                textAlign: "right",
                paddingRight: "8px",
                color: "var(--gray-8)",
                userSelect: "none",
                flexShrink: 0,
              }}
            >
              {line.lineNumber ?? ""}
            </Text>

            {/* Symbol indicator */}
            <Text
              size="1"
              style={{
                width: "16px",
                textAlign: "center",
                color: symbolColors[line.type],
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              {line.type === "added" && "+"}
              {line.type === "removed" && "-"}
              {line.type === "context" && " "}
            </Text>

            {/* Content */}
            <Text
              size="1"
              style={{
                flex: 1,
                whiteSpace: "pre",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {line.content}
            </Text>
          </Flex>
        ))}
      </Box>
    </Box>
  );
}
