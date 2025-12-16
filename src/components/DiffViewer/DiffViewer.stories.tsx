import type { Story } from "@ladle/react";
import { DiffViewer } from "./DiffViewer";

export default {
  title: "Display - DiffViewer",
};

export const Default: Story = () => (
  <div style={{ padding: "20px", background: "var(--gray-1)" }}>
    <DiffViewer
      diff={`--- a/example.ts
+++ b/example.ts
@@ -1,5 +1,6 @@
 function hello() {
-  console.log('Hello World');
+  console.log('Hello, World!');
+  return true;
 }

 export default hello;`}
      fileName="example.ts"
    />
  </div>
);

export const Additions: Story = () => (
  <div style={{ padding: "20px", background: "var(--gray-1)" }}>
    <DiffViewer
      diff={`--- a/config.json
+++ b/config.json
@@ -1,3 +1,7 @@
 {
   "name": "my-app",
-  "version": "1.0.0"
+  "version": "1.0.1",
+  "scripts": {
+    "dev": "vite",
+    "build": "vite build"
+  }
 }`}
      fileName="config.json"
    />
  </div>
);

export const Removals: Story = () => (
  <div style={{ padding: "20px", background: "var(--gray-1)" }}>
    <DiffViewer
      diff={`--- a/deprecated.ts
+++ b/deprecated.ts
@@ -1,10 +1,3 @@
 export class NewService {
   // New implementation
 }
-
-// Legacy code - removed
-export class OldService {
-  legacyMethod() {
-    console.log('deprecated');
-  }
-}`}
      fileName="deprecated.ts"
    />
  </div>
);

export const Mixed: Story = () => (
  <div style={{ padding: "20px", background: "var(--gray-1)" }}>
    <DiffViewer
      diff={`--- a/utils.ts
+++ b/utils.ts
@@ -1,12 +1,15 @@
 export function parseData(input: string) {
-  const raw = JSON.parse(input);
-  return raw;
+  try {
+    const parsed = JSON.parse(input);
+    return { success: true, data: parsed };
+  } catch (error) {
+    return { success: false, error };
+  }
 }

 export function formatDate(date: Date) {
-  return date.toLocaleDateString();
+  return date.toLocaleDateString('en-US', {
+    year: 'numeric',
+    month: 'long',
+    day: 'numeric'
+  });
 }`}
      fileName="utils.ts"
    />
  </div>
);

export const WithoutFileName: Story = () => (
  <div style={{ padding: "20px", background: "var(--gray-1)" }}>
    <DiffViewer
      diff={`@@ -1,3 +1,4 @@
 const greeting = 'Hello';
-console.log(greeting);
+const name = 'World';
+console.log(\`\${greeting}, \${name}!\`);`}
    />
  </div>
);

export const LargeDiff: Story = () => (
  <div style={{ padding: "20px", background: "var(--gray-1)" }}>
    <DiffViewer
      diff={`--- a/components/ChatArea.tsx
+++ b/components/ChatArea.tsx
@@ -1,30 +1,35 @@
 import { useState, useEffect } from 'react';
+import { Box, Flex } from '@radix-ui/themes';

 export function ChatArea() {
   const [messages, setMessages] = useState([]);
+  const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
-    fetchMessages();
+    loadMessages();
   }, []);

-  function fetchMessages() {
-    fetch('/api/messages')
-      .then(res => res.json())
-      .then(data => setMessages(data));
+  async function loadMessages() {
+    setIsLoading(true);
+    try {
+      const response = await fetch('/api/messages');
+      const data = await response.json();
+      setMessages(data);
+    } catch (error) {
+      console.error('Failed to load messages:', error);
+    } finally {
+      setIsLoading(false);
+    }
   }

   return (
-    <div className="chat-area">
-      {messages.map(msg => (
-        <div key={msg.id}>
-          {msg.content}
-        </div>
-      ))}
-    </div>
+    <Box p="4">
+      {isLoading ? (
+        <Flex justify="center">Loading...</Flex>
+      ) : (
+        messages.map(msg => (
+          <Box key={msg.id} mb="2">{msg.content}</Box>
+        ))
+      )}
+    </Box>
   );
 }`}
      fileName="components/ChatArea.tsx"
      maxHeight={400}
    />
  </div>
);

export const CustomHeight: Story = () => (
  <div style={{ padding: "20px", background: "var(--gray-1)" }}>
    <DiffViewer
      diff={`--- a/styles.css
+++ b/styles.css
@@ -1,5 +1,8 @@
 .container {
   padding: 20px;
-  background: white;
+  background: var(--gray-1);
+  border-radius: 8px;
+  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
 }`}
      fileName="styles.css"
      maxHeight={150}
    />
  </div>
);

export const MultipleFiles: Story = () => (
  <div
    style={{
      padding: "20px",
      background: "var(--gray-1)",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    }}
  >
    <DiffViewer
      diff={`@@ -1,2 +1,3 @@
 export const API_URL = 'https://api.example.com';
-export const TIMEOUT = 5000;
+export const TIMEOUT = 10000;
+export const RETRY_COUNT = 3;`}
      fileName="constants.ts"
      maxHeight={200}
    />
    <DiffViewer
      diff={`@@ -1,3 +1,3 @@
 {
-  "version": "1.0.0"
+  "version": "1.1.0"
 }`}
      fileName="package.json"
      maxHeight={200}
    />
  </div>
);
