import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import NotFound from "./NotFound";
import Blog from "./blog/Blog";
import {
  blogPosts,
  getBlogPostId,
  BlogPost as BlogPostInterface,
} from "./data/blog";
import BlogPost from "./blog/BlogPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  // TODO: add a route for each blog post
  ...blogPosts.map((post: BlogPostInterface) => ({
    path: `/blog/${getBlogPostId(post)}`,
    element: <BlogPost post={post} />,
  })),
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
