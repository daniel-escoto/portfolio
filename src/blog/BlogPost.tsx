import { BlogPost as BlogPostInterface } from "../data/blog";
import Layout from "../layouts/Layout";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

interface Props {
  post: BlogPostInterface;
}

export default function BlogPost({ post }: Props) {
  const markdownFilePath = `../markdown/${post.markdownFileName}`;

  const [content, setContent] = useState("");
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    import(markdownFilePath).then((module) => {
      fetch(module.default)
        .then((response) => response.text())
        .then((text) => setContent(text))
        .catch((error) => console.error(error));
    });
  }, [markdownFilePath]);

  return (
    <Layout>
      <h1 className="text-6xl font-bold mt-20 dark:text-gray-200">
        {post.title}
      </h1>
      <p className="text-xl mt-5 dark:text-gray-200">{formattedDate}</p>
      <div className="prose max-w-none mt-10 dark:prose-invert pb-20">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </Layout>
  );
}
