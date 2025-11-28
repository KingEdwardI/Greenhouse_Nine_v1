import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Flex, Heading, IconButton } from '@radix-ui/themes';
import { X } from 'lucide-react';
import './styles.css';

export interface DrawerProps extends DialogPrimitive.DialogProps {
    /**
     * Position of the drawer.
     * @default 'right'
     */
    position?: 'left' | 'right';
    /**
     * Size of the drawer.
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Drawer content.
     */
    children?: React.ReactNode;
}

interface DrawerContextValue {
    position: 'left' | 'right';
    size: 'sm' | 'md' | 'lg' | 'xl';
}

const DrawerContext = React.createContext<DrawerContextValue>({
    position: 'right',
    size: 'md',
});

const DrawerRoot: React.FC<DrawerProps> = ({
    children,
    position = 'right',
    size = 'md',
    ...props
}) => {
    return (
        <DrawerContext.Provider value={{ position, size }}>
            <DialogPrimitive.Root {...props}>
                {children}
            </DialogPrimitive.Root>
        </DrawerContext.Provider>
    );
};

const DrawerTrigger = DialogPrimitive.Trigger;
const DrawerClose = DialogPrimitive.Close;

interface DrawerContentProps extends DialogPrimitive.DialogContentProps {
    position?: 'left' | 'right';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    title?: string;
    /**
     * Enable glassmorphism effect
     */
    glass?: boolean;
}

const DrawerContent = React.forwardRef<HTMLDivElement, DrawerContentProps>(
    ({ children, position: positionProp, size: sizeProp, title, glass = false, className, ...props }, ref) => {
        const context = React.useContext(DrawerContext);
        const position = positionProp ?? context.position;
        const size = sizeProp ?? context.size;

        const composedClassName = [
            'gn-DrawerContent',
            glass && 'gn-Drawer--glass',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <DialogPrimitive.Portal>
                <DialogPrimitive.Overlay className="gn-DrawerOverlay" />
                <DialogPrimitive.Content
                    ref={ref}
                    className={composedClassName}
                    data-position={position}
                    data-size={size}
                    {...props}
                >
                    {title && (
                        <Flex justify="between" align="center" mb="4">
                            <DialogPrimitive.Title asChild>
                                <Heading size="4">{title}</Heading>
                            </DialogPrimitive.Title>
                            <DialogPrimitive.Close asChild>
                                <IconButton variant="ghost" color="gray" size="2">
                                    <X size={16} />
                                </IconButton>
                            </DialogPrimitive.Close>
                        </Flex>
                    )}
                    {children}
                </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
        );
    }
);
DrawerContent.displayName = 'DrawerContent';

export const Drawer = Object.assign(DrawerRoot, {
    Trigger: DrawerTrigger,
    Content: DrawerContent,
    Close: DrawerClose,
    Title: DialogPrimitive.Title,
    Description: DialogPrimitive.Description,
});
