import { BlogPost as BlogPostInterface, blogPosts } from "../data/blog";
import Layout from "../layouts/Layout";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

interface Props {
  post: BlogPostInterface;
}

export default function BlogPost({ post }: Props) {
  const [content, setContent] = useState("");
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch(post.markdownFileName);
      const text = await response.text();
      setContent(text);
    };
    fetchContent();
  }, [post.markdownFileName]);

  return (
    <Layout>
      <h1 className="text-6xl font-bold mt-20 dark:text-gray-200">
        {post.title}
      </h1>
      <p className="text-xl mt-5 dark:text-gray-200">{formattedDate}</p>
      {/* large prose markdown */}
      <div className="prose max-w-none mt-10 dark:prose-invert pb-20">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </Layout>
  );
}
