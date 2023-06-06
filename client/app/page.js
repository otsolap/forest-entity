import { fetchAPI } from '@/utils/fetch-api';
import { blockRenderer } from '@/utils/block-renderer';

async function getPageBySlug(slug) {
    const token = process.env.NEXT_PUBLIC_API_TOKEN;

    const path = `/pages`;
    const urlParamsObject = { filters: { slug }};
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    return response;
}

export default async function RootRoute({ params }) {
    const page = await getPageBySlug('/');
    if (page.data.length === 0) return null;
    const blocks = page.data[0].attributes.blocks;
    return blocks.map((block, index) => blockRenderer(block, index));
}
