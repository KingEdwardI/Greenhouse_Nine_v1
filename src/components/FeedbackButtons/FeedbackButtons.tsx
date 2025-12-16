import { memo } from 'react';
import { Flex, IconButton } from '@radix-ui/themes';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface FeedbackButtonsProps {
  disabled?: boolean;
  busy?: boolean;
  value?: 1 | -1 | null;
  onFeedback: (reward: 1 | -1) => Promise<void> | void;
}

export const FeedbackButtons = memo(
  ({ disabled = false, busy = false, value = null, onFeedback }: FeedbackButtonsProps) => {
    const handleClick = (reward: 1 | -1) => () => {
      if (disabled || busy) {
        return;
      }
      onFeedback(reward);
    };

    const likeActive = value === 1;
    const dislikeActive = value === -1;

    return (
      <Flex gap="1" align="center">
        <IconButton
          variant={likeActive ? 'solid' : 'ghost'}
          color={likeActive ? 'green' : 'gray'}
          size="1"
          aria-label="Like response"
          title="Like response"
          disabled={disabled || busy}
          onClick={handleClick(1)}
        >
          <ThumbsUp size={14} />
        </IconButton>
        <IconButton
          variant={dislikeActive ? 'solid' : 'ghost'}
          color={dislikeActive ? 'red' : 'gray'}
          size="1"
          aria-label="Dislike response"
          title="Dislike response"
          disabled={disabled || busy}
          onClick={handleClick(-1)}
        >
          <ThumbsDown size={14} />
        </IconButton>
      </Flex>
    );
  },
);

FeedbackButtons.displayName = 'FeedbackButtons';
