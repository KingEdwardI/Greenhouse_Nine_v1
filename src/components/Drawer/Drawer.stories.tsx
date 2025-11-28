import { useState } from 'react';
import { Drawer } from './Drawer';
import { Button, Flex, Text, TextField } from '@radix-ui/themes';

export default {
    title: 'Overlay - Drawer',
};

export const Basic = () => {
    const [open, setOpen] = useState(false);

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <Drawer.Trigger asChild>
                <Button>Open Drawer</Button>
            </Drawer.Trigger>
            <Drawer.Content title="Edit Profile">
                <Flex direction="column" gap="3">
                    <Text>Make changes to your profile here.</Text>
                    <TextField.Root placeholder="Name" defaultValue="Pedro Duarte" />
                    <TextField.Root placeholder="Username" defaultValue="@peduarte" />
                    <Flex gap="3" mt="4" justify="end">
                        <Drawer.Close asChild>
                            <Button variant="soft" color="gray">
                                Cancel
                            </Button>
                        </Drawer.Close>
                        <Button onClick={() => setOpen(false)}>Save changes</Button>
                    </Flex>
                </Flex>
            </Drawer.Content>
        </Drawer>
    );
};

export const LeftSide = () => {
    return (
        <Drawer position="left">
            <Drawer.Trigger asChild>
                <Button>Open Left Drawer</Button>
            </Drawer.Trigger>
            <Drawer.Content title="Navigation">
                <Flex direction="column" gap="2">
                    <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
                        Home
                    </Button>
                    <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
                        Settings
                    </Button>
                    <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
                        Logout
                    </Button>
                </Flex>
            </Drawer.Content>
        </Drawer>
    );
};

export const Sizes = () => {
    return (
        <Flex gap="3">
            {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
                <Drawer key={size} size={size}>
                    <Drawer.Trigger asChild>
                        <Button variant="outline">Size: {size}</Button>
                    </Drawer.Trigger>
                    <Drawer.Content title={`Drawer Size: ${size}`} size={size}>
                        <Text>This is a {size} drawer.</Text>
                    </Drawer.Content>
                </Drawer>
            ))}
        </Flex>
    );
};

export const Glass = () => {
    const [open, setOpen] = useState(false);

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <Drawer.Trigger asChild>
                <Button>Open Glass Drawer</Button>
            </Drawer.Trigger>
            <Drawer.Content title="Glass Effect" glass>
                <Flex direction="column" gap="3">
                    <Text>This drawer features the glassmorphism effect with blur and transparency.</Text>
                    <TextField.Root placeholder="Name" defaultValue="Pedro Duarte" />
                    <TextField.Root placeholder="Username" defaultValue="@peduarte" />
                    <Flex gap="3" mt="4" justify="end">
                        <Drawer.Close asChild>
                            <Button variant="soft" color="gray">
                                Cancel
                            </Button>
                        </Drawer.Close>
                        <Button onClick={() => setOpen(false)}>Save changes</Button>
                    </Flex>
                </Flex>
            </Drawer.Content>
        </Drawer>
    );
};

export const GlassLeft = () => {
    return (
        <Drawer position="left">
            <Drawer.Trigger asChild>
                <Button>Open Glass Left Drawer</Button>
            </Drawer.Trigger>
            <Drawer.Content title="Navigation" glass>
                <Flex direction="column" gap="2">
                    <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
                        Home
                    </Button>
                    <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
                        Settings
                    </Button>
                    <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
                        Logout
                    </Button>
                </Flex>
            </Drawer.Content>
        </Drawer>
    );
};

export const GlassSizes = () => {
    return (
        <Flex gap="3" wrap="wrap">
            {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
                <Drawer key={size} size={size}>
                    <Drawer.Trigger asChild>
                        <Button variant="outline">Glass {size}</Button>
                    </Drawer.Trigger>
                    <Drawer.Content title={`Glass Drawer: ${size}`} size={size} glass>
                        <Text>This is a {size} glass drawer with the glassmorphism effect.</Text>
                    </Drawer.Content>
                </Drawer>
            ))}
        </Flex>
    );
};
