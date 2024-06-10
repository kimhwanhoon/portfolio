import { create } from "zustand";

import type { BlogPostType } from "@/types/blogPostType";

interface SaveBlogPostsStore {
  postsList: BlogPostType[];
  savePostsList: (newList: BlogPostType[]) => void;
}

export const useSaveBlogPostsStore = create<SaveBlogPostsStore>()((set) => ({
  postsList: [],
  savePostsList: (newList) => set((state) => ({ postsList: newList })),
}));
