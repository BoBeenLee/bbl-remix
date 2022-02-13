import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getPost, PostItem } from "~/post";
import PostTemplate from "~/templates/post";
import Layout from "~/components/Layout";

export const loader: LoaderFunction = async ({ params }) => {
  return getPost(params.slug ?? "");
};

export default function PostSlug() {
  const post = useLoaderData<PostItem>();
  const { slug, title, html } = post;
  return (
    <Layout>
      <PostTemplate slug={slug} html={html ?? ""} title={title} />
    </Layout>
  );
}
