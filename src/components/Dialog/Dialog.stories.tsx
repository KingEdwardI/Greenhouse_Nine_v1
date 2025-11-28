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

export const Glass = () => (
  <Dialog
    glass
    title="Glass Dialog"
    description="A dialog with glass morphism effect."
    trigger={<Button glass>Open Glass Dialog</Button>}
    actions={(
      <>
        <Dialog.Close>
          <Button variant="soft" color="gray">Cancel</Button>
        </Dialog.Close>
        <Button glass color="accent">Confirm</Button>
      </>
    )}
  >
    This dialog demonstrates the glass morphism effect with backdrop blur,
    gradient overlays, and subtle lighting effects.
  </Dialog>
);

export const GlassSizes = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
    <Dialog glass title="Glass Size 1" trigger={<Button glass size="1">Open</Button>} size="1">
      Glass dialog with size 1
    </Dialog>
    <Dialog glass title="Glass Size 2" trigger={<Button glass size="2">Open</Button>} size="2">
      Glass dialog with size 2 (default)
    </Dialog>
    <Dialog glass title="Glass Size 3" trigger={<Button glass size="3">Open</Button>} size="3">
      Glass dialog with size 3
    </Dialog>
  </div>
);

export const GlassWithActions = () => (
  <Dialog
    glass
    title="Confirm Action"
    description="Are you sure you want to proceed with this action? This cannot be undone."
    trigger={<Button glass color="red">Delete Item</Button>}
    actions={(
      <>
        <Dialog.Close>
          <Button variant="soft" color="gray">Cancel</Button>
        </Dialog.Close>
        <Dialog.Close>
          <Button glass color="red">Delete</Button>
        </Dialog.Close>
      </>
    )}
  >
    <div style={{ padding: '16px 0' }}>
      <p style={{ margin: 0 }}>
        This action will permanently remove the item from your account.
        All associated data will be lost.
      </p>
    </div>
  </Dialog>
);


