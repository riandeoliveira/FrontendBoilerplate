import { Greetings } from "components/Greetings";
import type { NextPage } from "next";
import { ProtectedRoute } from "routes/ProtectedRoute";
import styles from "./styles.module.scss";

const Home: NextPage = (): JSX.Element => {
  return (
    <ProtectedRoute>
      <div className={styles.container}>
        <Greetings />
      </div>
    </ProtectedRoute>
  );
};

export default Home;
