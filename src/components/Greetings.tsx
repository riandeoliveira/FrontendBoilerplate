import { useCounter } from "hooks/useCounter";

export const Greetings = (): JSX.Element => {
  const { counter, increment } = useCounter();

  return (
    <>
      <h1 className="text-primary-500 text-3xl font-semibold text-center">
        Hello, <AUTHOR>!
      </h1>
      <h2 className="text-xl text-white">Have a nice coding!</h2>
      <button
        onClick={increment}
        className="bg-primary-500 text-white p-2 rounded-md font-medium"
      >
        Click me! {counter.value}
      </button>
    </>
  );
};
