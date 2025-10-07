import { BlogPost as BlogPostInterface } from "../data/blog";
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
    <div className="min-h-screen w-full bg-[#050709] px-4 py-10 font-mono text-slate-200">
      <div className="mx-auto max-w-4xl border border-slate-800 bg-[#0b1018] p-8">
        <a href="/blog" className="text-xs text-slate-500 hover:text-emerald-300">
          cd ../blog
        </a>
        <h1 className="mt-6 text-3xl text-emerald-300">{post.title}</h1>
        <p className="mt-2 text-xs text-slate-500">{formattedDate}</p>
        <div className="prose prose-invert mt-6 max-w-none">
          {typeof post.content === "string" ? (
            <ReactMarkdown>{post.content}</ReactMarkdown>
          ) : (
            post.content
          )}
        </div>
      </div>
    </div>
  );
}
