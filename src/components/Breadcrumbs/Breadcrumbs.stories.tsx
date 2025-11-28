import { Breadcrumbs } from './Breadcrumbs';

export const Basic = () => {
    const items = [
        { label: 'Home', href: '/' },
        { label: 'Settings', href: '/settings' },
        { label: 'Profile', active: true },
    ];

    return <Breadcrumbs items={items} />;
};

export const WithCustomSeparator = () => {
    const items = [
        { label: 'Project', href: '/project' },
        { label: 'Issues', href: '/project/issues' },
        { label: '#123', active: true },
    ];

    return <Breadcrumbs items={items} separator=">" />;
};
