export interface BlogPost {
  title: string;
  date: Date;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "My first blog post",
    date: new Date("2020-01-01"),
    content: "This is my first blog post",
  },
];

export function getBlogPostId(post: BlogPost) {
  return post.date.toISOString();
}
