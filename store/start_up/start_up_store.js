import create from "zustand";

const startUpStore = create((set) => ({
  show_startup: true,
  show_klogo: true,
  show_delay: 2,
  show_landing_page: false,

  set_show_startup: (value) => set((state) => ({ show_startup: value })),
  set_show_landing_page: (value) =>
    set((state) => ({ show_landing_page: value })),

  set_show_logo: (value) =>
    set((state) => ({
      show_klogo: value,
      show_delay: state.show_delay - 1,
    })),

  hover: 1000,
  set_hover: (value) =>
    set((state) => ({
      hover: value,
    })),
}));
export default startUpStore;
