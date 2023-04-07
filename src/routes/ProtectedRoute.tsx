import { useEffect } from "react";
// import { useUserStore } from "store/useUserStore";
// import type { UserState } from "types/user";

type ProtectedRouteProps = {
  children: JSX.Element;
};

export const ProtectedRoute = ({
  children,
}: ProtectedRouteProps): JSX.Element => {
  // const userStore: UserState = useUserStore();

  useEffect(() => {
    // userStore.verifyAuth();
  }, []);

  return <>{children}</>;
};
