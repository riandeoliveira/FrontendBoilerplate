export const Greetings = (): JSX.Element => {
  return (
    <>
      <h1 className="text-primary-500 text-3xl font-semibold">
        Hello, <%= props.author %>!
      </h1>
      <h2 className="text-xl text-white">Have a nice coding!</h2>
    </>
  );
};
