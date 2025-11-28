import { Card } from "./Card";
import { Button } from "../Button";

export default {
  title: "Core - Card",
};

export const Default = () => {
  return (
    <Card style={{ maxWidth: "300px" }}>
      <p>This is a default card with some content inside.</p>
    </Card>
  );
};

export const Variants = () => {
  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Card variant="surface" style={{ width: "200px" }}>
        <p>
          <strong>Surface</strong>
        </p>
        <p>Default variant</p>
      </Card>
      <Card variant="classic" style={{ width: "200px" }}>
        <p>
          <strong>Classic</strong>
        </p>
        <p>Classic variant</p>
      </Card>
    </div>
  );
};

export const Sizes = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        alignItems: "flex-start",
      }}
    >
      <Card size="1" style={{ width: "150px" }}>
        <p>
          <strong>Size 1</strong>
        </p>
        <p>Compact card</p>
      </Card>
      <Card size="2" style={{ width: "200px" }}>
        <p>
          <strong>Size 2 (default)</strong>
        </p>
        <p>Standard card size</p>
      </Card>
      <Card size="3" style={{ width: "250px" }}>
        <p>
          <strong>Size 3</strong>
        </p>
        <p>Spacious card with more padding</p>
      </Card>
    </div>
  );
};

export const WithContent = () => {
  return (
    <Card style={{ maxWidth: "400px" }}>
      <h3 style={{ margin: "0 0 12px 0" }}>Card Title</h3>
      <p style={{ margin: "0 0 16px 0", color: "var(--gray-11)" }}>
        This card contains various content elements including text, buttons, and
        other components.
      </p>
      <div style={{ display: "flex", gap: "8px" }}>
        <Button size="1">Primary Action</Button>
        <Button size="1" variant="outline">
          Secondary
        </Button>
      </div>
    </Card>
  );
};

export const Glass = () => {
  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Card glass style={{ width: "200px" }}>
        <p>
          <strong>Glass Card</strong>
        </p>
        <p>Subtle glassmorphism effect</p>
      </Card>
      <Card glass variant="classic" style={{ width: "200px" }}>
        <p>
          <strong>Glass Classic</strong>
        </p>
        <p>Glass with classic variant</p>
      </Card>
      <Card glass style={{ width: "200px" }}>
        <p>
          <strong>Glass with Button</strong>
        </p>
        <p>Card content with button</p>
        <Button size="1" style={{ marginTop: "12px" }}>
          Action
        </Button>
      </Card>
    </div>
  );
};
