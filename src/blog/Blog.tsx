import { blogPosts, getBlogPostId } from "../data/blog";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="min-h-screen w-full bg-[#050709] px-4 py-10 font-mono text-slate-200">
      <div className="mx-auto max-w-4xl border border-slate-800 bg-[#0b1018] p-8">
        <h1 className="text-3xl text-emerald-300">blog index</h1>
        <p className="mt-3 text-sm text-slate-400">
          notes, build logs, and experiments. pick a post to open the entry in the terminal view.
        </p>

        <div className="mt-8 space-y-6">
          {blogPosts.map((post) => (
            <article key={post.title} className="border border-slate-800 bg-[#050709] p-4 text-sm text-slate-200">
              <Link to={`/blog/${getBlogPostId(post)}`} className="text-lg text-emerald-300 hover:underline">
                {post.title}
              </Link>
              <p className="mt-2 text-xs text-slate-500">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="mt-3 text-sm text-slate-300">
                {post.preview}{" "}
                <Link to={`/blog/${getBlogPostId(post)}`} className="text-emerald-300 hover:underline">
                  read more
                </Link>
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
