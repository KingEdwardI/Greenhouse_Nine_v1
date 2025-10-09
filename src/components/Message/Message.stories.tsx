import type { Story } from '@ladle/react';
import { Message } from './Message';
import type { MessageProps } from './Message';

export default {
  title: 'Chat/Message'
};

export const Default: Story<MessageProps> = (args) => (
  <div style={{ padding: '20px', background: 'var(--gray-1)' }}>
    <Message {...args}>Hello, this is a test message!</Message>
  </div>
);

Default.args = {
  variant: 'user',
  timestamp: '2:34 PM',
  status: 'read',
  username: 'John Doe'
};

export const UserMessages: Story = () => (
  <div style={{ padding: '20px', background: 'var(--gray-1)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <Message variant="user" timestamp="2:32 PM" status="sending">
      This message is still sending...
    </Message>
    <Message variant="user" timestamp="2:33 PM" status="sent">
      This message was sent but not delivered yet.
    </Message>
    <Message variant="user" timestamp="2:34 PM" status="delivered">
      This message was delivered but not read.
    </Message>
    <Message variant="user" timestamp="2:35 PM" status="read">
      This message has been read!
    </Message>
  </div>
);

export const SystemMessages: Story = () => (
  <div style={{ padding: '20px', background: 'var(--gray-1)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <Message variant="system" timestamp="2:30 PM">
      System notification message
    </Message>
    <Message variant="assistant" timestamp="2:31 PM" username="Assistant">
      Assistant response message with some longer content to show how it wraps and handles different lengths of text content.
    </Message>
  </div>
);

export const Conversation: Story = () => (
  <div style={{ padding: '20px', background: 'var(--gray-1)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <Message variant="user" timestamp="2:30 PM" status="read">
      Hey, can you help me with something?
    </Message>
    <Message variant="assistant" timestamp="2:30 PM" username="Assistant">
      Of course! What do you need help with?
    </Message>
    <Message variant="user" timestamp="2:31 PM" status="read">
      I'm trying to understand how to implement a chat interface using React components.
    </Message>
    <Message variant="assistant" timestamp="2:31 PM" username="Assistant">
      That's a great question! A chat interface typically consists of several key components: message bubbles, an input area, and a scrollable message list. Each message should show who sent it, when it was sent, and potentially the delivery status.
    </Message>
  </div>
);