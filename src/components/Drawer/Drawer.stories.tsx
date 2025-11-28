import { useState } from "react";
import { Drawer } from "./Drawer";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";

export default {
  title: "Overlays - Drawer",
};

export const Basic = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <Drawer.Trigger asChild>
        <Button>Open Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Content title="Edit Profile">
        <div
          style={{
            padding: "var(--space-4) 0",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Flex direction="column" gap="4" height="100%">
            <Text as="p" size="2" color="gray">
              Make changes to your profile here. Click save when you're done.
            </Text>

            <Flex direction="column" gap="3" flexGrow="1">
              <div>
                <Text as="label" size="2" weight="medium" mb="2">
                  Full Name
                </Text>
                <TextField.Root
                  placeholder="Enter your full name"
                  defaultValue="Pedro Duarte"
                />
              </div>

              <div>
                <Text as="label" size="2" weight="medium" mb="2">
                  Username
                </Text>
                <TextField.Root
                  placeholder="Enter username"
                  defaultValue="@peduarte"
                />
              </div>
            </Flex>

            <Flex gap="3" pt="4">
              <Drawer.Close asChild>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Drawer.Close>
              <Button onClick={() => setOpen(false)}>Save changes</Button>
            </Flex>
          </Flex>
        </div>
      </Drawer.Content>
    </Drawer>
  );
};

export const LeftSide = () => {
  return (
    <Drawer position="left">
      <Drawer.Trigger asChild>
        <Button>Open Left Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Content title="Navigation">
        <div
          style={{
            padding: "var(--space-4) 0",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Flex direction="column" gap="6" height="100%">
            <Text as="p" size="2" color="gray">
              Quick navigation menu
            </Text>

            <Flex direction="column" gap="2" flexGrow="1">
              <Text as="div" size="2" weight="bold" mb="2" color="gray">
                Menu
              </Text>
              <Button variant="ghost" size="3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "8px" }}
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
                Home
              </Button>
              <Button variant="ghost" size="3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "8px" }}
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
                Settings
              </Button>
            </Flex>

            <Flex direction="column" gap="2">
              <Text as="div" size="2" weight="bold" mb="2" color="gray">
                Account
              </Text>
              <Button variant="ghost" size="3" color="red">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "8px" }}
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16,17 21,12 16,7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                Logout
              </Button>
            </Flex>
          </Flex>
        </div>
      </Drawer.Content>
    </Drawer>
  );
};

export const Sizes = () => {
  return (
    <Flex gap="3" wrap="wrap">
      {(["sm", "md", "lg", "xl"] as const).map(size => (
        <Drawer key={size} size={size}>
          <Drawer.Trigger asChild>
            <Button variant="outline">Size: {size}</Button>
          </Drawer.Trigger>
          <Drawer.Content title={`Drawer Size: ${size}`} size={size}>
            <div
              style={{
                padding: "var(--space-4) 0",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Flex direction="column" gap="4" height="100%">
                <div>
                  <Text as="p" size="2" color="gray" mb="3">
                    This is a {size} drawer with improved spacing and layout.
                  </Text>

                  <div
                    style={{
                      width: "100%",
                      height: "120px",
                      backgroundColor: "var(--gray-a3)",
                      borderRadius: "var(--radius-2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px dashed var(--gray-a5)",
                    }}
                  >
                    <Text size="2" color="gray">
                      Content Area
                    </Text>
                  </div>
                </div>

                <Flex gap="3" pt="4">
                  <Drawer.Close asChild>
                    <Button variant="soft" color="gray">
                      Close
                    </Button>
                  </Drawer.Close>
                </Flex>
              </Flex>
            </div>
          </Drawer.Content>
        </Drawer>
      ))}
    </Flex>
  );
};

export const Glass = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <Drawer.Trigger asChild>
        <Button>Open Glass Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Content title="Glass Effect" glass>
        <div
          style={{
            padding: "var(--space-4) 0",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Flex direction="column" gap="4" height="100%">
            <Text as="p" size="2" color="gray">
              This drawer features the glassmorphism effect with blur and
              transparency for a modern look.
            </Text>

            <Flex direction="column" gap="3" flexGrow="1">
              <div>
                <Text as="label" size="2" weight="medium" mb="2">
                  Full Name
                </Text>
                <TextField.Root
                  placeholder="Enter your full name"
                  defaultValue="Pedro Duarte"
                />
              </div>

              <div>
                <Text as="label" size="2" weight="medium" mb="2">
                  Username
                </Text>
                <TextField.Root
                  placeholder="Enter username"
                  defaultValue="@peduarte"
                />
              </div>

              <div>
                <Text as="label" size="2" weight="medium" mb="2">
                  Email
                </Text>
                <TextField.Root
                  type="email"
                  placeholder="Enter email"
                  defaultValue="pedro@example.com"
                />
              </div>
            </Flex>

            <Flex gap="3" pt="4">
              <Drawer.Close asChild>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Drawer.Close>
              <Button onClick={() => setOpen(false)}>Save changes</Button>
            </Flex>
          </Flex>
        </div>
      </Drawer.Content>
    </Drawer>
  );
};

export const GlassLeft = () => {
  return (
    <Drawer position="left">
      <Drawer.Trigger asChild>
        <Button>Open Glass Left Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Content title="Navigation" glass>
        <div
          style={{
            padding: "var(--space-4) 0",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Flex direction="column" gap="6" height="100%">
            <Text as="p" size="2" color="gray">
              Glass navigation with modern styling
            </Text>

            <Flex direction="column" gap="2" flexGrow="1">
              <Text as="div" size="2" weight="bold" mb="2" color="gray">
                Menu
              </Text>
              <Button variant="ghost" size="3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "8px" }}
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
                Home
              </Button>
              <Button variant="ghost" size="3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "8px" }}
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
                Settings
              </Button>
              <Button variant="ghost" size="3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "8px" }}
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10,9 9,9 8,9" />
                </svg>
                Help
              </Button>
            </Flex>

            <Flex direction="column" gap="2">
              <Text as="div" size="2" weight="bold" mb="2" color="gray">
                Account
              </Text>
              <Button variant="ghost" size="3" color="red">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "8px" }}
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16,17 21,12 16,7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                Logout
              </Button>
            </Flex>
          </Flex>
        </div>
      </Drawer.Content>
    </Drawer>
  );
};

export const GlassSizes = () => {
  return (
    <Flex gap="3" wrap="wrap">
      {(["sm", "md", "lg", "xl"] as const).map(size => (
        <Drawer key={size} size={size}>
          <Drawer.Trigger asChild>
            <Button variant="outline">Glass {size}</Button>
          </Drawer.Trigger>
          <Drawer.Content title={`Glass Drawer: ${size}`} size={size} glass>
            <div
              style={{
                padding: "var(--space-4) 0",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Flex direction="column" gap="4" height="100%">
                <div>
                  <Text as="p" size="2" color="gray" mb="3">
                    This is a {size} glass drawer with the glassmorphism effect
                    and improved layout.
                  </Text>

                  <div
                    style={{
                      width: "100%",
                      height: "120px",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "var(--radius-2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px dashed rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <Text size="2" color="gray">
                      Glass Content Area
                    </Text>
                  </div>
                </div>

                <Flex direction="column" gap="3" flexGrow="1">
                  <div>
                    <Text as="label" size="2" weight="medium" mb="2">
                      Sample Field
                    </Text>
                    <TextField.Root placeholder="Enter something..." />
                  </div>
                </Flex>

                <Flex gap="3" pt="4">
                  <Drawer.Close asChild>
                    <Button variant="soft" color="gray">
                      Close
                    </Button>
                  </Drawer.Close>
                </Flex>
              </Flex>
            </div>
          </Drawer.Content>
        </Drawer>
      ))}
    </Flex>
  );
};
