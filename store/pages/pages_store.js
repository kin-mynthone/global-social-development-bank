import create from "zustand";

const pagesStore = create((set) => ({
  page_index: 0,

  set_page_index: (value) => set((state) => ({ page_index: value })),
}));
export default pagesStore;
