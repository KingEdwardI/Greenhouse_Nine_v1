import type { Story } from '@ladle/react';
import { TypingIndicator } from './TypingIndicator';
import type { TypingIndicatorProps } from './TypingIndicator';

export default {
  title: 'Messaging - TypingIndicator'
};

export const Default: Story<TypingIndicatorProps> = (args) => (
  <div style={{ padding: '20px', background: 'var(--gray-1)' }}>
    <TypingIndicator {...args} />
  </div>
);

Default.args = {
  users: ['Alice']
};

export const SingleUser: Story = () => (
  <div style={{ padding: '20px', background: 'var(--gray-1)' }}>
    <TypingIndicator users={['John']} />
  </div>
);

export const TwoUsers: Story = () => (
  <div style={{ padding: '20px', background: 'var(--gray-1)' }}>
    <TypingIndicator users={['Alice', 'Bob']} />
  </div>
);

export const MultipleUsers: Story = () => (
  <div style={{ padding: '20px', background: 'var(--gray-1)' }}>
    <TypingIndicator users={['Alice', 'Bob', 'Charlie', 'Diana']} />
  </div>
);

export const NoUsers: Story = () => (
  <div style={{ padding: '20px', background: 'var(--gray-1)' }}>
    <p>No typing indicator should appear below:</p>
    <TypingIndicator users={[]} />
    <p>Nothing rendered above this text.</p>
  </div>
);

export const InChatContext: Story = () => (
  <div style={{ padding: '20px', background: 'var(--gray-1)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <div style={{ maxWidth: '80%', marginRight: 'auto' }}>
      <div style={{ background: 'var(--gray-3)', padding: '8px 12px', borderRadius: '12px' }}>
        Hey, are you there?
      </div>
    </div>
    <div style={{ maxWidth: '80%', marginLeft: 'auto' }}>
      <div style={{ background: 'var(--accent-9)', color: 'var(--accent-contrast)', padding: '8px 12px', borderRadius: '12px' }}>
        Yes, just working on something. What's up?
      </div>
    </div>
    <div style={{ maxWidth: '80%', marginRight: 'auto' }}>
      <TypingIndicator users={['Alice']} />
    </div>
  </div>
);