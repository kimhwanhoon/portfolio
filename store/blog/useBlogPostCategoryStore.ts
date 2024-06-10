import { create } from "zustand";

interface BlogPostCategoryStore {
  categories: string[];
  saveCategories: (categories: string[]) => void;
}

export const useBlogPostCategoryStore = create<BlogPostCategoryStore>()(
  (set) => ({
    categories: [],
    saveCategories: (categories) =>
      set((state) => ({ categories: categories })),
  }),
);
