import { BlogPost as BlogPostInterface, blogPosts } from "../data/blog";
import Layout from "../layouts/Layout";
import ReactMarkdown from "react-markdown";

interface Props {
  post: BlogPostInterface;
}

export default function BlogPost({ post }: Props) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Layout>
      <h1 className="text-6xl font-bold mt-20 dark:text-gray-200">
        {post.title}
      </h1>
      <p className="text-xl mt-5 dark:text-gray-200">{formattedDate}</p>
      {/* large prose markdown */}
      <div className="prose dark:prose-dark max-w-none mt-10">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </Layout>
  );
}
