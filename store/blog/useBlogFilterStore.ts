import { create } from "zustand";

interface BlogFilterStore {
  categories: string[];
  tags: string[];
  ascending: boolean;
  saveCategories: (categories: string[]) => void;
  saveTags: (tags: string[]) => void;
  saveAscending: (isSwitched: boolean) => void;
}

export const useBlogFilterStore = create<BlogFilterStore>()((set) => ({
  categories: [],
  tags: [],
  ascending: false,
  saveCategories: (categories) => set(() => ({ categories: categories })),
  saveTags: (tags) => set(() => ({ tags: tags })),
  saveAscending: (isSwitched) => set(() => ({ ascending: isSwitched })),
}));
