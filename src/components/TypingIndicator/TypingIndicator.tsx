import React from 'react';
import { Text } from '../Text';
import './TypingIndicator.css';

export interface TypingIndicatorProps {
  users?: string[];
  className?: string;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({ 
  users = [], 
  className 
}) => {
  const composedClassName = ['gn-TypingIndicator', className].filter(Boolean).join(' ');

  if (users.length === 0) {
    return null;
  }

  const getTypingText = () => {
    if (users.length === 1) {
      return `${users[0]} is typing`;
    } else if (users.length === 2) {
      return `${users[0]} and ${users[1]} are typing`;
    } else if (users.length > 2) {
      return `${users[0]}, ${users[1]} and ${users.length - 2} others are typing`;
    }
    return 'Someone is typing';
  };

  return (
    <div className={composedClassName}>
      <div className="gn-TypingIndicator__dots">
        <div className="gn-TypingIndicator__dot" />
        <div className="gn-TypingIndicator__dot" />
        <div className="gn-TypingIndicator__dot" />
      </div>
      <Text size="1" className="gn-TypingIndicator__text">
        {getTypingText()}...
      </Text>
    </div>
  );
};

TypingIndicator.displayName = 'TypingIndicator';