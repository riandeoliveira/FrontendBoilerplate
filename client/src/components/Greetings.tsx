import { useCounterStore } from "store/useCounterStore";

export const Greetings = (): JSX.Element => {
  const counterStore = useCounterStore();

  return (
    <>
      <h1 className="text-primary-500 text-3xl font-semibold text-center">
        Hello, <AUTHOR>!
      </h1>
      <h2 className="text-xl text-white">Have a nice coding!</h2>
      <button
        onClick={counterStore.increment}
        className="bg-primary-500 text-white p-2 rounded-md font-medium"
      >
        Click me! {counterStore.value}
      </button>
    </>
  );
};
