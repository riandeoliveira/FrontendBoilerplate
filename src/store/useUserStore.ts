import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
  updateEmail as updateUserEmail,
  updatePassword as updateUserPassword,
  type User,
  type UserCredential,
} from "firebase/auth";
import { auth } from "services/firebase";
import type { UserState, UserType } from "types/user";
import { create } from "zustand";

export const useUserStore = create<UserState>((set, get): UserState => {
  return {
    user: {
      id: "",
      name: "",
      email: "",
      authenticated: false,
    },

    clear: (): void => {
      set({
        user: {
          id: "",
          name: "",
          email: "",
          authenticated: false,
        },
      });
    },

    delete: async (): Promise<void> => {
      await auth.currentUser?.delete();

      get().clear();
    },

    login: async (email: string, password: string): Promise<void> => {
      try {
        const credentials: UserCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const { uid, displayName } = credentials.user;

        set({
          user: {
            id: uid,
            name: displayName as string,
            email,
            authenticated: true,
          },
        });
      } catch (error) {
        console.error(error);
      }
    },

    logout: async (): Promise<void> => {
      await auth.signOut();

      get().clear();
    },

    register: async (
      name: string,
      email: string,
      password: string
    ): Promise<void> => {
      try {
        const credentials: UserCredential =
          await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(credentials.user, { displayName: name });

        const userId: string = credentials.user.uid;

        set({
          user: {
            id: userId,
            name,
            email,
            authenticated: true,
          },
        });
      } catch (error) {
        console.error(error);
      }
    },

    resetPassword: async (email: string): Promise<void> => {
      await sendPasswordResetEmail(auth, email);
    },

    updateEmail: async (email: string): Promise<void> => {
      await updateUserEmail(auth.currentUser as User, email);
    },

    updateName: async (name: string): Promise<void> => {
      await updateProfile(auth.currentUser as User, { displayName: name });
    },

    updatePassword: async (password: string): Promise<void> => {
      await updateUserPassword(auth.currentUser as User, password);
    },

    verify: (): void => {
      onAuthStateChanged(auth, (user: User | null) => {
        const userProps: Omit<UserType, "password"> = get().user;

        if (user) {
          set({
            user: {
              ...userProps,
              authenticated: true,
            },
          });
        } else {
          set({
            user: {
              ...userProps,
              authenticated: false,
            },
          });
        }
      });
    },
  };
});
