import "highlight.js/styles/github-dark.css"; // Import your favorite highlight.js theme

import { renderMarkdown } from "@/lib/render";
import { fetchPost, fetchPosts } from "@/lib/fetch";

export async function generateMetadata({
                                           params,
                                       }: {
    params: { slug: string };
}) {
    const { title, description } = await fetchPost(params.slug);

    return {
        title,
        description,
    };
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { body_markdown } = await fetchPost(params.slug);

    const content = await renderMarkdown(body_markdown);

    return (
        <>
            <article>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>
        </>
    );
}
