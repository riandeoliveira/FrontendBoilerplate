import { State } from "types/state";
import { create } from "zustand";

export const useCounterStore = create<State.Counter>((set): State.Counter => {
  return {
    value: 0,

    increment(): void {
      set((state) => ({
        value: state.value + 1,
      }));
    },
  };
});
