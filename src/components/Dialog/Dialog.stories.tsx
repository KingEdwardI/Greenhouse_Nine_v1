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
    <Dialog title="Small" trigger={<Button size="sm">Open</Button>} size="sm">
      Small dialog content
    </Dialog>
    <Dialog title="Medium" trigger={<Button size="md">Open</Button>} size="md">
      Medium dialog content
    </Dialog>
    <Dialog title="Large" trigger={<Button size="lg">Open</Button>} size="lg">
      Large dialog content
    </Dialog>
  </div>
);


