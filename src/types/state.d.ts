import { UserType } from "types";

export namespace State {
  export type Counter = {
    value: number;
    increment(): void;
  };

  export type User = {
    user: Omit<UserType, "password">;

    /**
     * Clear user data from the store.
     */
    clear(): void;

    /**
     * Deletes and signs out the user.
     */
    delete(): Promise<void>;

    /**
     * Signs in a user.
     */
    login(email: string, password: string): Promise<void>;

    /**
     * Signs out a user.
     */
    logout(): Promise<void>;

    /**
     * Creates a new user account associated with the specified email address and password.
     */
    register(name: string, email: string, password: string): Promise<void>;

    /**
     * Resets user password.
     */
    resetPassword(email: string): Promise<void>;

    /**
     * Updates user email.
     */
    updateEmail(email: string): Promise<void>;

    /**
     * Updates user name.
     */
    updateName(name: string): Promise<void>;

    /**
     * Updates user password.
     */
    updatePassword(password: string): Promise<void>;

    /**
     * Checks if the user is authenticated.
     */
    verifyAuth(): void;

    /**
     * Sends a verification email to the user.
     */
    verifyEmail(): Promise<void>;
  };
}
