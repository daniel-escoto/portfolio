import UsingChatGPT from "./blog-posts/ChatGPTLeetcodeSolutions.mdx";

export interface BlogPost {
  title: string;
  date: Date;
  content: JSX.Element;
  preview: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Using ChatGPT to Write Leetcode Solutions",
    date: new Date("2022-12-14"),
    content: <UsingChatGPT />,
    preview:
      "Find out how I used ChatGPT to write Leetcode solutions and how you can do it too!",
  },
];

export function getBlogPostId(post: BlogPost) {
  return post.title.replace(/\s/g, "-").toLowerCase();
}
