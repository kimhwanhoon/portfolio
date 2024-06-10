import { create } from "zustand";

interface BlogFilterStore {
  categories: string[];
  tags: string[];
  saveCategories: (categories: string[]) => void;
  saveTags: (tags: string[]) => void;
}

export const useBlogFilterStore = create<BlogFilterStore>()((set) => ({
  categories: [],
  tags: [],
  saveCategories: (categories) => set(() => ({ categories: categories })),
  saveTags: (tags) => set(() => ({ tags: tags })),
}));
