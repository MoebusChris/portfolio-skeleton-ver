type ImageLinkArgs = {
    /** Image ID */
    id: ImageKey;
    /** Image Height */
    h: number;
    /** Image Width */
    w: number;
    /** Adds the fit=max query param */
    max?: boolean;

};

export function getImageLink({ id, h, w, max }: ImageLinkArgs): string {
    const path = images[id].raw;
    return `${path}&w=${w}&h=${h}&auto=format&fit=${max ? 'max' : 'crop'}`;
}

type ImageKey = keyof typeof images;

export const images = {
    qucYweSE3ZY: {
        raw: 'https://images.unsplash.com/photo-1606127195437-d12564b184e9?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&ixlib=rb-4.0.3'
    },
    z_X0PxmBuIQ: {
		raw: 'https://images.unsplash.com/photo-1510111652602-195fc654aa83?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY0Nzl8&ixlib=rb-4.0.3'
	},
} as const;

