// Link list
export type menuLists = Array<{ id: number; label: string; href: string; }>;

export const menuLists = [
    {   
        id: 1,
        label: 'Home',
        href: '/',
    },
    {   
        id: 2,
        label: 'About',
        href: '/about',
    },
    {   
        id: 3,
        label: 'Projects',
        href: '/projects',
    }
]