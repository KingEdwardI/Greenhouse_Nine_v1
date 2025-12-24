import { useState } from "react";
import type { Story } from "@ladle/react";
import { FeedbackButtons } from "./FeedbackButtons";
import { Box, Card, Flex, Text } from "@radix-ui/themes";

export default {
  title: "Interaction - FeedbackButtons",
};

export const Default: Story = () => {
  const [feedback, setFeedback] = useState<1 | -1 | null>(null);

  return (
    <div style={{ padding: "20px", background: "var(--gray-1)" }}>
      <Card style={{ maxWidth: "400px" }}>
        <Box p="4">
          <Text size="2" mb="3">
            Current feedback:{" "}
            {feedback === 1 ? "Liked" : feedback === -1 ? "Disliked" : "None"}
          </Text>
          <FeedbackButtons
            value={feedback}
            onFeedback={reward => setFeedback(reward)}
          />
        </Box>
      </Card>
    </div>
  );
};

export const Neutral: Story = () => (
  <div style={{ padding: "20px", background: "var(--gray-1)" }}>
    <Card style={{ maxWidth: "400px" }}>
      <Box p="4">
        <Text size="2" mb="3">
          No feedback selected
        </Text>
        <FeedbackButtons value={null} onFeedback={() => {}} />
      </Box>
    </Card>
  </div>
);

export const Liked: Story = () => (
  <div style={{ padding: "20px", background: "var(--gray-1)" }}>
    <Card style={{ maxWidth: "400px" }}>
      <Box p="4">
        <Text size="2" mb="3">
          User liked this response
        </Text>
        <FeedbackButtons value={1} onFeedback={() => {}} />
      </Box>
    </Card>
  </div>
);

export const Disliked: Story = () => (
  <div style={{ padding: "20px", background: "var(--gray-1)" }}>
    <Card style={{ maxWidth: "400px" }}>
      <Box p="4">
        <Text size="2" mb="3">
          User disliked this response
        </Text>
        <FeedbackButtons value={-1} onFeedback={() => {}} />
      </Box>
    </Card>
  </div>
);

export const Disabled: Story = () => (
  <div style={{ padding: "20px", background: "var(--gray-1)" }}>
    <Card style={{ maxWidth: "400px" }}>
      <Box p="4">
        <Text size="2" mb="3">
          Feedback buttons disabled
        </Text>
        <FeedbackButtons value={null} onFeedback={() => {}} disabled />
      </Box>
    </Card>
  </div>
);

export const Busy: Story = () => (
  <div style={{ padding: "20px", background: "var(--gray-1)" }}>
    <Card style={{ maxWidth: "400px" }}>
      <Box p="4">
        <Text size="2" mb="3">
          Processing feedback (busy state)
        </Text>
        <FeedbackButtons value={null} onFeedback={() => {}} busy />
      </Box>
    </Card>
  </div>
);

export const DisabledWithValue: Story = () => (
  <div
    style={{
      padding: "20px",
      background: "var(--gray-1)",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    }}
  >
    <Card style={{ maxWidth: "400px" }}>
      <Box p="4">
        <Text size="2" mb="3">
          Liked (disabled)
        </Text>
        <FeedbackButtons value={1} onFeedback={() => {}} disabled />
      </Box>
    </Card>
    <Card style={{ maxWidth: "400px" }}>
      <Box p="4">
        <Text size="2" mb="3">
          Disliked (disabled)
        </Text>
        <FeedbackButtons value={-1} onFeedback={() => {}} disabled />
      </Box>
    </Card>
  </div>
);

export const Interactive: Story = () => {
  const [feedback, setFeedback] = useState<1 | -1 | null>(null);
  const [busy, setBusy] = useState(false);

  const handleFeedback = async (reward: 1 | -1) => {
    setBusy(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setFeedback(reward);
    setBusy(false);
  };

  return (
    <div style={{ padding: "20px", background: "var(--gray-1)" }}>
      <Card style={{ maxWidth: "400px" }}>
        <Box p="4">
          <Flex direction="column" gap="3">
            <Text size="2">
              Status:{" "}
              {busy
                ? "Processing..."
                : feedback === 1
                  ? "Liked"
                  : feedback === -1
                    ? "Disliked"
                    : "No feedback"}
            </Text>
            <FeedbackButtons
              value={feedback}
              onFeedback={handleFeedback}
              busy={busy}
            />
          </Flex>
        </Box>
      </Card>
    </div>
  );
};

export const InMessageContext: Story = () => {
  const messages: Array<{
    id: number;
    content: string;
    feedback: 1 | -1 | null;
  }> = [
    { id: 1, content: "Hello! How can I help you today?", feedback: null },
    { id: 2, content: "I can assist with various tasks.", feedback: 1 },
    { id: 3, content: "Let me know if you need anything else.", feedback: -1 },
  ];

  return (
    <div style={{ padding: "20px", background: "var(--gray-1)" }}>
      <Flex direction="column" gap="3" style={{ maxWidth: "500px" }}>
        {messages.map(msg => (
          <Card key={msg.id}>
            <Box p="3">
              <Flex justify="between" align="center">
                <Text size="2">{msg.content}</Text>
                <FeedbackButtons value={msg.feedback} onFeedback={() => {}} />
              </Flex>
            </Box>
          </Card>
        ))}
      </Flex>
    </div>
  );
};

export const AllStates: Story = () => (
  <div
    style={{
      padding: "20px",
      background: "var(--gray-1)",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "16px",
    }}
  >
    <Card>
      <Box p="3">
        <Text size="1" weight="bold" mb="2">
          Neutral
        </Text>
        <FeedbackButtons value={null} onFeedback={() => {}} />
      </Box>
    </Card>

    <Card>
      <Box p="3">
        <Text size="1" weight="bold" mb="2">
          Liked
        </Text>
        <FeedbackButtons value={1} onFeedback={() => {}} />
      </Box>
    </Card>

    <Card>
      <Box p="3">
        <Text size="1" weight="bold" mb="2">
          Disliked
        </Text>
        <FeedbackButtons value={-1} onFeedback={() => {}} />
      </Box>
    </Card>

    <Card>
      <Box p="3">
        <Text size="1" weight="bold" mb="2">
          Disabled
        </Text>
        <FeedbackButtons value={null} onFeedback={() => {}} disabled />
      </Box>
    </Card>

    <Card>
      <Box p="3">
        <Text size="1" weight="bold" mb="2">
          Busy
        </Text>
        <FeedbackButtons value={null} onFeedback={() => {}} busy />
      </Box>
    </Card>

    <Card>
      <Box p="3">
        <Text size="1" weight="bold" mb="2">
          Liked + Disabled
        </Text>
        <FeedbackButtons value={1} onFeedback={() => {}} disabled />
      </Box>
    </Card>

    <Card>
      <Box p="3">
        <Text size="1" weight="bold" mb="2">
          Disliked + Disabled
        </Text>
        <FeedbackButtons value={-1} onFeedback={() => {}} disabled />
      </Box>
    </Card>

    <Card>
      <Box p="3">
        <Text size="1" weight="bold" mb="2">
          Liked + Busy
        </Text>
        <FeedbackButtons value={1} onFeedback={() => {}} busy />
      </Box>
    </Card>
  </div>
);

export const ToggleBehavior: Story = () => {
  const [feedback, setFeedback] = useState<1 | -1 | null>(null);

  const handleFeedback = (reward: 1 | -1) => {
    // Toggle off if clicking the same button
    setFeedback(feedback === reward ? null : reward);
  };

  return (
    <div style={{ padding: "20px", background: "var(--gray-1)" }}>
      <Card style={{ maxWidth: "400px" }}>
        <Box p="4">
          <Flex direction="column" gap="3">
            <Text size="2">
              Current:{" "}
              {feedback === 1 ? "Liked" : feedback === -1 ? "Disliked" : "None"}
            </Text>
            <Text size="1" color="gray">
              Click the same button again to deselect
            </Text>
            <FeedbackButtons value={feedback} onFeedback={handleFeedback} />
          </Flex>
        </Box>
      </Card>
    </div>
  );
};
