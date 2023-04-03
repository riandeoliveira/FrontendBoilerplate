import { Greetings } from "components/Greetings";
import type { NextPage } from "next";
import { ProtectedRoute } from "routes/ProtectedRoute";

const Home: NextPage = (): JSX.Element => {
  return (
    <ProtectedRoute>
      <div className="font-primary h-screen bg-zinc-900 flex items-center justify-center flex-col gap-2">
        <Greetings />
      </div>
    </ProtectedRoute>
  );
};

export default Home;
