import Link from "next/link";

import { fetchPosts } from "@/lib/fetch";

export default async function Page() {
    const posts = await fetchPosts();

    return (
        <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2">
            {posts.map((post) => (
                <Link
                    href={`/blogs/${post.slug}`}
                    key={post.id}
                >
                    {post.title}
                </Link>
            ))}
        </div>
    );
}
