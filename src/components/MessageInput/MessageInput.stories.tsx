import type { Story } from '@ladle/react';
import { MessageInput } from './MessageInput';
import type { MessageInputProps } from './MessageInput';

export default {
  title: 'Chat/MessageInput'
};

export const Default: Story<MessageInputProps> = (args) => (
  <div style={{ height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
    <MessageInput {...args} />
  </div>
);

Default.args = {
  placeholder: 'Type a message...',
  onSend: (message: string) => console.log('Sent:', message)
};

export const Loading: Story = () => (
  <div style={{ height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
    <MessageInput 
      loading={true}
      placeholder="Sending..."
      onSend={(message) => console.log('Sent:', message)}
    />
  </div>
);

export const Disabled: Story = () => (
  <div style={{ height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
    <MessageInput 
      disabled={true}
      placeholder="Chat is disabled"
      onSend={(message) => console.log('Sent:', message)}
    />
  </div>
);

export const CustomPlaceholder: Story = () => (
  <div style={{ height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
    <MessageInput 
      placeholder="Ask me anything..."
      onSend={(message) => console.log('Sent:', message)}
    />
  </div>
);

export const Interactive: Story = () => {
  return (
    <div style={{ height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'var(--gray-1)' }}>
      <div style={{ padding: '20px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'var(--gray-11)', textAlign: 'center' }}>
          Try typing a message and press Enter to send.<br />
          Use Shift+Enter for new lines.
        </p>
      </div>
      <MessageInput 
        placeholder="Type your message here..."
        onSend={(message) => {
          alert(`Message sent: "${message}"`);
        }}
      />
    </div>
  );
};