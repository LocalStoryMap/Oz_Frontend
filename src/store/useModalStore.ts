import { create } from 'zustand';

type ModalType = 'confirm' | 'content' | null;

type ModalState = {
  type?: ModalType;
  isOpen: boolean;
  data?: any;
  open: (type?: ModalType, data?: any) => void;
  close: () => void;
};

export const useModalStore = create<ModalState>(set => ({
  type: null,
  isOpen: false,
  data: undefined,
  open: (type, data) => set({ isOpen: true, type, data }),
  close: () => set({ isOpen: false, type: null, data: undefined }),
}));
