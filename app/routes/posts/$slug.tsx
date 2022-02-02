import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getPost } from "~/post";

export const loader: LoaderFunction = async ({ params }) => {
  return getPost(params.slug ?? "");
};

export default function PostSlug() {
  const post = useLoaderData();

  return <div dangerouslySetInnerHTML={{ __html: post.html }} />;
}
