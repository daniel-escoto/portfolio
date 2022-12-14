import chatGPTLeetcode from "../assets/using-chatgpt-to-write-leetcode-solutions.md";

export interface BlogPost {
  title: string;
  date: Date;
  markdownFileName: string;
  preview: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Using ChatGPT to Write Leetcode Solutions",
    date: new Date("2022-12-14"),
    markdownFileName: chatGPTLeetcode,
    preview:
      "Find out how I used ChatGPT to write Leetcode solutions and how you can do it too!",
  },
];

export function getBlogPostId(post: BlogPost) {
  return post.title.replace(/\s/g, "-").toLowerCase();
}
