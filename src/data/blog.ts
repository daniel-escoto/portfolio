export interface BlogPost {
  title: string;
  date: Date;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "My first blog post",
    date: new Date("2022-11-30"),
    // content is a three paragraphs of lorem ipsum string
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Sed euismod, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Sed euismod, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Sed euismod, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Sed euismod, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Sed euismod, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Sed euismod, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Sed euismod, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Sed euismod, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Sed euismod, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Sed euismod, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Sed euismod, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Sed euismod, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Sed euismod, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc nisl eget nisl. Sed euismod, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet`,
  },
];

export function getBlogPostId(post: BlogPost) {
  return post.title.replace(/\s/g, "-").toLowerCase();
}
