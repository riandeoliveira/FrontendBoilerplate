import { create } from "zustand";

type CounterState = {
  value: number;
  increment: () => void;
};

export const useCounterStore = create<CounterState>((set): CounterState => {
  return {
    value: 0,

    increment: () => set((state) => ({ value: state.value + 1 })),
  };
});
