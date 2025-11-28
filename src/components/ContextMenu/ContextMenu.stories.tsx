import { ContextMenu, type ContextMenuItemData } from "./ContextMenu";

export default {
  title: "Overlays - ContextMenu",
};

const basicItems: ContextMenuItemData[] = [
  {
    id: "copy",
    label: "Copy",
    icon: "📋",
    shortcut: "⌘C",
  },
  {
    id: "paste",
    label: "Paste",
    icon: "📄",
    shortcut: "⌘V",
  },
  {
    id: "separator-1",
    separator: true,
  },
  {
    id: "cut",
    label: "Cut",
    icon: "✂️",
    shortcut: "⌘X",
  },
  {
    id: "duplicate",
    label: "Duplicate",
    icon: "📑",
    shortcut: "⌘D",
  },
  {
    id: "separator-2",
    separator: true,
  },
  {
    id: "delete",
    label: "Delete",
    icon: "🗑️",
    shortcut: "Del",
    destructive: true,
  },
];

const submenuItems: ContextMenuItemData[] = [
  {
    id: "new",
    label: "New",
    icon: "➕",
    children: [
      {
        id: "new-file",
        label: "File",
        icon: "📄",
        shortcut: "⌘N",
      },
      {
        id: "new-folder",
        label: "Folder",
        icon: "📁",
        shortcut: "⇧⌘N",
      },
      {
        id: "separator",
        separator: true,
      },
      {
        id: "new-document",
        label: "Document",
        icon: "📝",
      },
    ],
  },
  {
    id: "edit",
    label: "Edit",
    icon: "✏️",
    children: [
      {
        id: "rename",
        label: "Rename",
        shortcut: "F2",
      },
      {
        id: "properties",
        label: "Properties",
        shortcut: "⌘I",
      },
    ],
  },
  {
    id: "separator",
    separator: true,
  },
  {
    id: "share",
    label: "Share",
    icon: "🔗",
  },
  {
    id: "download",
    label: "Download",
    icon: "⬇️",
  },
];

const fileManagerItems: ContextMenuItemData[] = [
  {
    id: "open",
    label: "Open",
    icon: "📂",
    shortcut: "⌘O",
  },
  {
    id: "open-with",
    label: "Open with",
    icon: "🔧",
    children: [
      {
        id: "text-editor",
        label: "Text Editor",
        icon: "📝",
      },
      {
        id: "code-editor",
        label: "Code Editor",
        icon: "💻",
      },
      {
        id: "image-viewer",
        label: "Image Viewer",
        icon: "🖼️",
      },
    ],
  },
  {
    id: "separator-1",
    separator: true,
  },
  {
    id: "copy-path",
    label: "Copy Path",
    icon: "📋",
    shortcut: "⌥⌘C",
  },
  {
    id: "show-in-finder",
    label: "Show in Finder",
    icon: "🔍",
    shortcut: "⌘R",
  },
  {
    id: "separator-2",
    separator: true,
  },
  {
    id: "compress",
    label: "Compress",
    icon: "📦",
  },
  {
    id: "separator-3",
    separator: true,
  },
  {
    id: "move-to-trash",
    label: "Move to Trash",
    icon: "🗑️",
    shortcut: "⌘⌫",
    destructive: true,
  },
];

export const Basic = () => (
  <div
    style={{
      padding: "2rem",
      height: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <ContextMenu
      items={basicItems}
      onItemSelect={itemId => alert(`Selected: ${itemId}`)}
    >
      <div
        style={{
          padding: "2rem",
          border: "2px dashed var(--gray-6)",
          borderRadius: "var(--radius-3)",
          textAlign: "center",
          cursor: "context-menu",
        }}
      >
        Right-click me for basic context menu
      </div>
    </ContextMenu>
  </div>
);

export const WithSubmenus = () => (
  <div
    style={{
      padding: "2rem",
      height: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <ContextMenu
      items={submenuItems}
      onItemSelect={itemId => alert(`Selected: ${itemId}`)}
    >
      <div
        style={{
          padding: "2rem",
          border: "2px dashed var(--gray-6)",
          borderRadius: "var(--radius-3)",
          textAlign: "center",
          cursor: "context-menu",
        }}
      >
        Right-click me for context menu with submenus
      </div>
    </ContextMenu>
  </div>
);

export const FileManager = () => (
  <div
    style={{
      padding: "2rem",
      height: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <ContextMenu
      items={fileManagerItems}
      onItemSelect={itemId => alert(`File action: ${itemId}`)}
    >
      <div
        style={{
          padding: "2rem",
          border: "2px solid var(--gray-6)",
          borderRadius: "var(--radius-3)",
          textAlign: "center",
          cursor: "context-menu",
          background: "var(--gray-2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div style={{ fontSize: "3rem" }}>📄</div>
        <div>document.txt</div>
        <div style={{ fontSize: "var(--font-size-1)", color: "var(--gray-9)" }}>
          Right-click for file operations
        </div>
      </div>
    </ContextMenu>
  </div>
);

export const WithDisabledItems = () => {
  const itemsWithDisabled: ContextMenuItemData[] = [
    {
      id: "copy",
      label: "Copy",
      icon: "📋",
      shortcut: "⌘C",
    },
    {
      id: "paste",
      label: "Paste",
      icon: "📄",
      shortcut: "⌘V",
      disabled: true,
    },
    {
      id: "separator",
      separator: true,
    },
    {
      id: "undo",
      label: "Undo",
      icon: "↶",
      shortcut: "⌘Z",
      disabled: true,
    },
    {
      id: "redo",
      label: "Redo",
      icon: "↷",
      shortcut: "⇧⌘Z",
    },
  ];

  return (
    <div
      style={{
        padding: "2rem",
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ContextMenu
        items={itemsWithDisabled}
        onItemSelect={itemId => alert(`Selected: ${itemId}`)}
      >
        <div
          style={{
            padding: "2rem",
            border: "2px dashed var(--gray-6)",
            borderRadius: "var(--radius-3)",
            textAlign: "center",
            cursor: "context-menu",
          }}
        >
          Right-click me for context menu with disabled items
        </div>
      </ContextMenu>
    </div>
  );
};

export const OnText = () => (
  <div style={{ padding: "2rem" }}>
    <p>
      This is a paragraph of text.{" "}
      <ContextMenu
        items={basicItems}
        onItemSelect={itemId => alert(`Selected: ${itemId}`)}
      >
        <span
          style={{
            background: "var(--yellow-3)",
            padding: "2px 4px",
            borderRadius: "var(--radius-1)",
          }}
        >
          Right-click this highlighted text
        </span>
      </ContextMenu>{" "}
      for a context menu. You can use context menus on any element.
    </p>
  </div>
);

export const Glass = () => (
  <div
    style={{
      padding: "4rem",
      minHeight: "420px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background:
        "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 45%), radial-gradient(circle at 80% 0%, rgba(102,51,255,0.25), transparent 55%), linear-gradient(145deg, #050505, #0d1117)",
    }}
  >
    <ContextMenu
      items={fileManagerItems}
      onItemSelect={itemId => console.log(`Glass action: ${itemId}`)}
      glass
    >
      <div
        style={{
          padding: "2.5rem",
          borderRadius: "var(--radius-4)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.55)",
          background: "rgba(255, 255, 255, 0.02)",
          color: "var(--gray-1)",
          textAlign: "center",
          cursor: "context-menu",
          width: "280px",
        }}
      >
        Right-click anywhere on this glass tile
      </div>
    </ContextMenu>
  </div>
);
