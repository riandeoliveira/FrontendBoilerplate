import { Greetings } from "components/Greetings";
import type { NextPage } from "next";

const Home: NextPage = (): JSX.Element => {
  return (
    <div className="font-primary h-screen bg-zinc-900 flex items-center justify-center flex-col gap-2">
      <Greetings />
    </div>
  );
};

export default Home;
