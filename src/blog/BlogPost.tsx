import { BlogPost as BlogPostInterface, blogPosts } from "../data/blog";
import Layout from "../layouts/Layout";

interface Props {
  post: BlogPostInterface;
}

export default function BlogPost({ post }: Props) {
  return (
    <Layout>
      <h1 className="text-6xl font-bold mt-20 dark:text-gray-200">
        {post.title}
      </h1>
      <p className="text-xl mt-10 dark:text-gray-200">{post.content}</p>
    </Layout>
  );
}
