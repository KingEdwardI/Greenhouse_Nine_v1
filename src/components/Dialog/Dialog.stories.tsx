import { Dialog } from './Dialog';
import { Button } from '../Button';

export default {
  title: 'Overlay/Dialog'
};

export const Default = () => (
  <Dialog
    title="Dialog Title"
    description="A short description provides helpful context."
    trigger={<Button>Open dialog</Button>}
    actions={(
      <>
        <Dialog.Close>
          <Button variant="soft" color="gray">Cancel</Button>
        </Dialog.Close>
        <Button color="accent">Confirm</Button>
      </>
    )}
  >
    Dialog body content goes here.
  </Dialog>
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
    <Dialog title="Size 1" trigger={<Button size="1">Open</Button>} size="1">
      Size 1 dialog content
    </Dialog>
    <Dialog title="Size 2" trigger={<Button size="2">Open</Button>} size="2">
      Size 2 dialog content (default)
    </Dialog>
    <Dialog title="Size 3" trigger={<Button size="3">Open</Button>} size="3">
      Size 3 dialog content
    </Dialog>
  </div>
);


