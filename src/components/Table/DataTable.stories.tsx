import { DataTable } from "./DataTable";

export default {
  title: "Data Display - Data Table",
};

export const Basic = () => (
  <DataTable
    headers={[
      { label: "Name" },
      { label: "Role" },
      { label: "Status" },
    ]}
    rows={[
      ["Alice Johnson", "Developer", "Active"],
      ["Bob Smith", "Designer", "Active"],
      ["Charlie Brown", "Manager", "Inactive"],
    ]}
  />
);

export const WithAlignment = () => (
  <DataTable
    headers={[
      { label: "Product", align: "left" },
      { label: "Price", align: "right" },
      { label: "Stock", align: "center" },
      { label: "Status", align: "center" },
    ]}
    rows={[
      ["MacBook Pro", "$2,499", "15", "In Stock"],
      ["iPad Air", "$599", "42", "In Stock"],
      ["Magic Mouse", "$79", "128", "In Stock"],
      ["AirPods Pro", "$249", "0", "Out of Stock"],
    ]}
  />
);

export const LongContent = () => (
  <DataTable
    headers={[
      { label: "ID" },
      { label: "Description" },
      { label: "Category" },
      { label: "Priority" },
    ]}
    rows={[
      [
        "TASK-001",
        "Implement the new authentication system with OAuth 2.0 support and multi-factor authentication",
        "Security",
        "High",
      ],
      [
        "TASK-002",
        "Refactor the legacy codebase to use modern React patterns including hooks and context",
        "Technical Debt",
        "Medium",
      ],
      [
        "TASK-003",
        "Design and develop the new dashboard with real-time analytics and customizable widgets",
        "Feature",
        "High",
      ],
      [
        "TASK-004",
        "Fix the memory leak in the WebSocket connection handler that causes crashes after extended use",
        "Bug",
        "Critical",
      ],
      [
        "TASK-005",
        "Update all dependencies to their latest stable versions and test for compatibility issues",
        "Maintenance",
        "Low",
      ],
    ]}
  />
);

export const ManyColumns = () => (
  <DataTable
    headers={[
      { label: "ID" },
      { label: "Name" },
      { label: "Email" },
      { label: "Department" },
      { label: "Location" },
      { label: "Phone" },
      { label: "Hire Date" },
      { label: "Salary" },
      { label: "Status" },
    ]}
    rows={[
      [
        "001",
        "Alice Johnson",
        "alice@example.com",
        "Engineering",
        "San Francisco",
        "+1-555-0101",
        "2020-03-15",
        "$120,000",
        "Active",
      ],
      [
        "002",
        "Bob Smith",
        "bob@example.com",
        "Design",
        "New York",
        "+1-555-0102",
        "2019-07-22",
        "$95,000",
        "Active",
      ],
      [
        "003",
        "Charlie Brown",
        "charlie@example.com",
        "Product",
        "Austin",
        "+1-555-0103",
        "2021-01-10",
        "$110,000",
        "Active",
      ],
    ]}
  />
);

export const StickyHeader = () => (
  <div style={{ height: "400px", overflow: "hidden" }}>
    <DataTable
      headers={[
        { label: "Index" },
        { label: "Data Point" },
        { label: "Value" },
        { label: "Timestamp" },
      ]}
      rows={Array.from({ length: 100 }, (_, i) => [
        `${i + 1}`,
        `Data Point ${i + 1}`,
        `${Math.floor(Math.random() * 1000)}`,
        new Date(Date.now() - i * 86400000).toLocaleDateString(),
      ])}
      stickyHeader
    />
  </div>
);

export const GhostVariant = () => (
  <DataTable
    headers={[
      { label: "Name" },
      { label: "Role" },
      { label: "Status" },
    ]}
    rows={[
      ["Alice Johnson", "Developer", "Active"],
      ["Bob Smith", "Designer", "Active"],
      ["Charlie Brown", "Manager", "Inactive"],
    ]}
    variant="ghost"
  />
);

export const GlassEffect = () => (
  <div
    style={{
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "2rem",
      borderRadius: "var(--radius-3)",
    }}
  >
    <DataTable
      headers={[
        { label: "Project" },
        { label: "Progress", align: "center" },
        { label: "Status" },
      ]}
      rows={[
        ["Greenhouse Nine", "85%", "Active"],
        ["TaskWing", "92%", "Active"],
        ["HollowMind", "78%", "Active"],
        ["Prowler", "95%", "Complete"],
      ]}
      glass
    />
  </div>
);

export const SmallSize = () => (
  <DataTable
    headers={[
      { label: "Code" },
      { label: "Name" },
      { label: "Type" },
    ]}
    rows={[
      ["JS", "JavaScript", "Language"],
      ["TS", "TypeScript", "Language"],
      ["RS", "Rust", "Language"],
    ]}
    size="1"
  />
);

export const LargeSize = () => (
  <DataTable
    headers={[
      { label: "Title" },
      { label: "Author" },
      { label: "Year" },
    ]}
    rows={[
      ["The Pragmatic Programmer", "Hunt & Thomas", "1999"],
      ["Clean Code", "Robert Martin", "2008"],
      ["Design Patterns", "Gang of Four", "1994"],
    ]}
    size="3"
  />
);

export const WithReactNodes = () => (
  <DataTable
    headers={[
      { label: "User" },
      { label: "Status" },
      { label: "Actions" },
    ]}
    rows={[
      [
        <div key="user1" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "var(--accent-9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold"
          }}>
            A
          </div>
          <span>Alice Johnson</span>
        </div>,
        <span key="status1" style={{
          padding: "0.25rem 0.5rem",
          borderRadius: "var(--radius-2)",
          background: "var(--green-9)",
          color: "white",
          fontSize: "0.75rem"
        }}>
          Active
        </span>,
        <button key="action1" style={{
          padding: "0.25rem 0.75rem",
          borderRadius: "var(--radius-2)",
          background: "var(--accent-9)",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}>
          Edit
        </button>
      ],
      [
        <div key="user2" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "var(--accent-9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold"
          }}>
            B
          </div>
          <span>Bob Smith</span>
        </div>,
        <span key="status2" style={{
          padding: "0.25rem 0.5rem",
          borderRadius: "var(--radius-2)",
          background: "var(--gray-9)",
          color: "white",
          fontSize: "0.75rem"
        }}>
          Inactive
        </span>,
        <button key="action2" style={{
          padding: "0.25rem 0.75rem",
          borderRadius: "var(--radius-2)",
          background: "var(--accent-9)",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}>
          Edit
        </button>
      ],
    ]}
  />
);
