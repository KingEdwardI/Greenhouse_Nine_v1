import { Tooltip } from './Tooltip';
import { Button } from '../Button';

export default {
  title: 'Overlay/Tooltip'
};

export const Default = () => {
  return (
    <Tooltip content="Hello from tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  );
};

export const Widths = () => {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Tooltip content="Narrow tooltip" maxWidth="120px">
        <Button size="sm">Narrow</Button>
      </Tooltip>
      <Tooltip content="Default width tooltip">
        <Button size="md">Default</Button>
      </Tooltip>
      <Tooltip content="Wider tooltip" maxWidth="320px">
        <Button size="lg">Wide</Button>
      </Tooltip>
    </div>
  );
};


