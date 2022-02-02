import { Link, useLoaderData } from "remix";
import { getPosts } from "~/post";

export type Post = {
  slug: string;
  title: string;
};

export const loader = async () => {
  const response = await getPosts();
  const filteredPublished = response.filter((item) => Boolean(item.published));
  return filteredPublished;
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
