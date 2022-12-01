export interface BlogPost {
  title: string;
  date: Date;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "My first blog post",
    date: new Date("2022-11-30"),
    content: ``,
  },
];

export function getBlogPostId(post: BlogPost) {
  return post.title.replace(/\s/g, "-").toLowerCase();
}
